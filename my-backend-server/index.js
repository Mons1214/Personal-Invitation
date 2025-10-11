const express = require('express');
const app = express();
const PORT = 5173;

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('Servidor: Pagina Principal');
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/lista', (req, res) => {
    console.log('aquí esta la lista')
    res.sendFile(__dirname + `/public/pages/ListaDeInvitados.html`);
});

app.get('/registros', (req, res) => {
    console.log('registros')
    res.sendFile(__dirname + `/public/pages/Registros.html`);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});