// Importiere das Express-Modul
const express = require('express');

// Erstelle eine neue Express-Anwendung
const app = express();

// Definiere eine Route für HTTP GET-Anfragen an die Wurzel-URL ('/')
app.get('/', (req, res) => {
	// Sende die Antwort 'Hello, CI/CD!' an den Client
	res.send('Hello, CI/CD!');
});

// Exportiere die Express-Anwendung, damit sie in anderen Dateien verwendet werden kann
module.exports = app;
