/**
 * @file server.js
 * @project Simple HTTP Forwarding Server for Single Domain
 * @author Marco Di Pasquale (Hocram)
 * @date 2023-10-01
 * @version 1.0.0
 * @description Main server file for the HTTP forwarding server project.
 * @projectDescription This project demonstrates HTTP request forwarding using Node.js and Express.
 * @repository [GitHub Repository](https://github.com/hocram/simple-http-forwarding-server)
 * @license MIT 
 */

const http = require('http');
const https = require('https');
const dns = require('dns');

var express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// CONFIG FILE
// Load configuration from config.json
const config = require("../config.json");
console.log("CONFIG FILE:", config);

// Target external server URL from config.json
// CHECK CONFIG SERVER TARGET URL
if(!config || !config.externalServer || !config.externalServer.url){
    console.error("ERROR: SERVER TARGET PARAMETERS NOT EXISTS. SYSTEM EXIT.");
    process.exit(1);
}
// Load Target External Server URL
const targetUrl = config.externalServer.url;
console.log("EXTERNAL SERVER URL: " , targetUrl);

// Default port or the one specified in config.json
// Example for process enviroment in command line: 'PORT=3000 node index.js'
const PORT = process.env.PORT || config.port || 8080;
console.log("CONFIG PORT: ", PORT);

// Create an Express app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// Configure DNS
dns.setDefaultResultOrder('ipv4first');

// Configure CORS
// Enable CORS to allow requests from any origin (customize as needed)
app.use(cors());
/*
// Valid CORS configuration that allows requests from the specified URL
const corsOptions = {
    origin: 'http://example.com', // Replace with the allowed URL
    methods: ['GET', 'POST'], // List of allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // List of allowed headers
};
app.use(cors(corsOptions));
*/

// Handle all forwarded requests
app.all('*', (req, res) => {
    console.log("\n\n------------ FORWRDING URL:", req.url);

    // Extract the destination URL from the configuration file
    const targetUrlInfo = new URL(targetUrl); 

    // Get the request body and headers
    let body = req.body;
    let bodyStr = body ? JSON.stringify( body ) : null;
    console.log("BODY: ", body, " BODY STR: ", bodyStr);

    // Get Header
    let headers = req.headers;
    
    // Remove some unnecessary headers
    delete headers['host'];
    delete headers['connection'];
    delete headers['url'];
    
    // Add headers specified in the configuration file
    Object.entries(config.externalServer.headers).map(([key, value]) => {
        headers[key] = value;
    });

    // Set the content length if the request body is present
    if(req.body && Object.keys(req.body).length != 0) {
        headers['content-length'] = bodyStr.length;
    }
    
    // Create the request to the destination server
    const options = {
        method: req.method,
        headers: headers,
        protocol: targetUrlInfo.protocol,
        hostname: targetUrlInfo.hostname, 
        port: targetUrlInfo.port,
        path: req.url,
        body: body,
        params: req.params,
        query: req.query,
    };
    console.log("----- REQUEST OPTIONS: ", options);

    // Use HTTP or HTTPS protocol based on the destination URL
    let protocolRequest = http;
    if( options.protocol == "https:"){
        protocolRequest = https;
    }

    // Make the request to the destination server
    const proxyReq = protocolRequest.request(options, (proxyRes) => {
        let responseData = '';
        proxyRes.setEncoding('utf8');

        // Forwards the status header and response headers from the destination server
        res.writeHead(proxyRes.statusCode, proxyRes.headers);

        // Handle data received during the response
        proxyRes.on('data', (chunk) => {
            responseData += chunk;
        });

        // Event when the response from the destination server is completed
        proxyRes.on('end', () => {
            console.log('--- RESPONSE: ', responseData);
            // Close the response to the client
            res.end();
        });

        // Forward the response body from the destination server to the client
        proxyRes.pipe(res);
    });

    // Error handling for the request to the destination server
    proxyReq.on('error', (error) => {
        console.error('Error in request to destination server.', error);
        res.status(500).send('Error in request to destination server.');
    });

    // Write the request body if present
    if( bodyStr ){
        proxyReq.write(bodyStr);
    }

    // Finalize the request to the destination server
    proxyReq.end();

    // Forwards the body of the request to the destination server
    req.pipe(proxyReq);
});

// Start the server
app.listen(PORT, () => 
    console.log('Server is running on http://localhost:' + PORT)
);