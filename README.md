# Simple HTTP Forwarding Server for Single Domain
A basic server for Forwarding HTTP Requests/Responses to a Single Domain and Port in Node.js and Express.
An educational project to understand forwarding HTTP requests from one server to another.

[![Node.js Version](https://img.shields.io/badge/Node.js-v18.15.0-green)](https://nodejs.org/)
[![Express.js Version](https://img.shields.io/badge/Express.js-v4.18.2-blue)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

## Description
This is an educational project aimed at helping developers understand the fundamental concepts of forwarding HTTP requests between servers. Whether you're new to web development or looking to dive deeper into server-side technologies, this project provides a practical hands-on experience.

The HTTP Request Forwarding Server intercepts incoming HTTP requests from clients and forwards them to a specified destination server. The server acts as an intermediary, allowing you to manage request headers, process routing logic, and much more.

Powered by Node.js and the Express framework, we've crafted a lightweight and efficient HTTP server. It revolves around capturing, processing, and forwarding incoming requests to their respective destinations.

## Key Features
- Receives HTTP requests from clients.
- Forwards HTTP requests to a configured destination server.
- Modifies request headers, if needed.
- Receives responses from the destination server.
- Forwards responses back to clients.

## Readme Translations
- [Read in English.](README.md)
- [Leggi in Italiano.](README.it.md)

## Requirements
- Node.js and npm installed on your system.

## Installing and Usage
1. Clone this repository to your computer.
2. Install the project dependencies using npm:
```shell
npm install
```
3. Configure the HTTP request forwarding settings in the 'config.json' file.
4. Start the server using the following command:
```shell
npm start
```
5. The server will listen for client requests and forward them to the destination server.

## Configuration
You can customize the server's behavior by editing the 'config.json' file. 

Modify the server listening port, the destination server URL (target server), the manipulating client's request headers before sending it to the destination server, or any other settings as needed.

```json
{
    "port": 8080,
    "externalServer": {
      "url": "http://127.0.0.1:3000",
      "headers": {
        "Content-Type": "application/json"
      }
    }
}
```

## Authors
* Name: Marco Di Pasquale (Hocram)
* GitHub Profile: [Hocram](https://github.com/hocram) (https://github.com/hocram)

## Contacts
For questions, bug reports, or suggestions, you can reach out to us through GitHub's issue tracking system:
- [Open a new issue](https://github.com/hocram/simple-http-forwarding-server/issues/new) to report problems or propose enhancements.
- Please refer to our [Issue Guidelines](https://github.com/hocram/simple-http-forwarding-server/blob/main/ISSUE_GUIDELINES.md) before opening a new issue.

We welcome your feedback and collaboration!

## License
This project is licensed under the MIT License, Copyright (c) 2023 - Marco Di Pasquale (Hocram) Author. See the 'LICENSE' file for details.

## Future Plans
In a future project, we plan to create a more advanced server with additional features using Nest.js and save the results in a database. Stay tuned for more exciting developments!

## Thank You!
A big thank you to everyone who will contribute to perfecting this project. Your future contributions will be greatly appreciated and will help make this educational resource even better, while always keeping in mind the KISS (Keep It Simple, Stupid) methodology for design: striving to keep it simple, clear, and uncomplicated.

Please note that the purpose of this project remains purely educational and serves as an illustrative example.

Happy coding and learning! :smile:

Hocram
