const express = require('express');
const nunjucks = require('nunjucks');
const salaRoutes = require('./routes/salaRoutes');
const app = express();
const port = 26000;

// Configurando o Nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    noCache: true, // Para desenvolvimento, evita cache
});

// Usar as rotas
app.use('/', salaRoutes);

app.listen(port, () => {
    console.log(`Servidor Nunjucks rodando em http://localhost:${port}`);
});
