# Semplice HTTP Forwarding Server per un Singolo Dominio
Un server essenziale per l'inoltro (Forwarding) delle richieste e delle risposte HTTP verso un singolo dominio e porta, realizzato in Node.js ed Express.
Progetto didattico per comprendere l'inoltro delle richieste HTTP da un server all'altro.

[![Node.js Version](https://img.shields.io/badge/Node.js-v18.15.0-green)](https://nodejs.org/)
[![Express.js Version](https://img.shields.io/badge/Express.js-v4.18.2-blue)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)

## Descrizione
Questo è un progetto didattico ha l'obiettivo di aiutare gli sviluppatori a comprendere i concetti fondamentali dell'inoltro delle richieste HTTP tra server. Che tu sia alle prime armi nello sviluppo web o desideri approfondire le tecnologie lato server, questo progetto offre un'esperienza pratica e concreta.

Il Server di forwarding delle richieste HTTP intercetta le richieste HTTP in arrivo dai client e le inoltra a un server di destinazione specificato. Il server funge da intermediario, consentendo di gestire gli header delle richieste, di elaborare la logica di instradamento e molto altro.

Alimentato da Node.js e dal framework Express, creeremo un server HTTP leggero ed efficiente. Si basa sulla cattura, l'elaborazione e l'inoltro delle richieste in arrivo ai rispettivi destinatari.

## Funzionalità Principali
- Riceve richieste HTTP dai client.
- Inoltra le richieste HTTP a un server di destinazione configurato.
- Modifica gli header delle richieste, se necessario.
- Riceve risposte dal server di destinazione.
- Inoltra le risposte ai client.

## Traduzioni Readme
- [Read in English.](README.md)
- [Leggi in Italiano.](README.it.md)

## Requirements
- Node.js e npm devono essere installati nel tuo sistema.

## Installing and Usage
1. Clona questo repository sul tuo computer.
2. Installa le dipendenze del progetto tramite npm:
```shell
npm install
```
3. Configura le impostazioni di inoltro delle richieste HTTP nel file 'config.json'.
4. Avvia il server utilizzando il seguente comando:
```shell
npm start
```
5. Il server sarà in ascolto per le richieste dei client e le inoltrerà al server di destinazione.

## Configurazione
E' possibile personalizzare il comportamento del server modificando il file 'config.json'.

Modifica la porta di ascolto del server, l'URL del server di destinazione (server obiettivo), la manipolazione degli header delle richieste dei client prima dell'invio al server di destinazione o qualsiasi altra impostazione necessaria.

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

## Author
* Nome: Marco Di Pasquale (Hocram)
* Profilo GitHub: [Hocram](https://github.com/hocram) (https://github.com/hocram)

## Contatti
Per domande, segnalazioni di bug o suggerimenti, puoi contattarci attraverso il sistema di tracciamento problemi di GitHub:
- [Apri una nuova issue](https://github.com/hocram/simple-http-forwarding-server/issues/new) per segnalare problemi o proporre miglioramenti.
- Consulta le [Linee Guida per le Issue](https://github.com/hocram/simple-http-forwarding-server/blob/main/ISSUE_GUIDELINES.md) prima di aprire una nuova issue.

Accogliamo il tuo feedback e la tua collaborazione!

## Licenza
Questo progetto è distribuito con Licenza MIT, Copyright (c) 2023 - Autore Marco Di Pasquale (Hocram). Consulta il file 'LICENSE' per ulteriori dettagli.

## Piani Futuri
In un futuro progetto, prevediamo di creare un server più avanzato con funzionalità aggiuntive utilizzando Nest.js e salvare i risultati in un database. Resta sintonizzato per sviluppi sempre più entusiasmanti!

## Grazie!
Un grande ringraziamento a tutti coloro che contribuiranno a perfezionare questo progetto. Le tue future contribuzioni saranno molto apprezzate e contribuiranno a rendere questa risorsa educativa ancora migliore, mantenendo sempre presente la metodologia di progettazione KISS (Keep It Simple, Stupid): cercando di mantenerla semplice, chiara e priva di complicazioni.

Si prega di notare che lo scopo di questo progetto rimane puramente educativo e serve come esempio illustrativo.

Buon codice e buon apprendimento! :smile:

Hocram