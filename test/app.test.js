// Importiere das Supertest-Modul, um HTTP-Assertions zu ermöglichen
const request = require('supertest');

// Importiere die Express-Anwendung aus der app.js-Datei
const app = require('../app');

// Deklariere eine Variable für den Server
let server;

// Führt vor allen Tests Initialisierungen durch
beforeAll((done) => {
	// Setze den Port auf den Wert aus der Umgebungsvariable PORT oder auf 3000
	const port = process.env.PORT || 3000;
	// Starte den Server und speichere die Server-Instanz in der Variable 'server'
	server = app.listen(port, () => {
		// Logge eine Nachricht, dass der Server läuft
		console.log(`Server läuft auf Port ${port}`);
		// Rufe den Callback 'done' auf, um anzuzeigen, dass die Initialisierung abgeschlossen ist
		done();
	});
});

// Führt nach allen Tests eine Bereinigung durch
afterAll((done) => {
	// Schließt den Server und führt den Callback 'done' aus, um anzuzeigen, dass die Bereinigung abgeschlossen ist
	server.close(done);
});

// Beschreibt eine Gruppe von Tests für die Route 'GET /'
describe('GET /', () => {
	// Definiert einen Testfall
	it('should return 200 and "Hello, CI/CD!"', async () => {
		// Sendet eine GET-Anfrage an den Server und erwartet den Status 200 und die Antwort 'Hello, CI/CD!'
		await request(server).get('/').expect(200).expect('Hello, CI/CD!');
	});
});
