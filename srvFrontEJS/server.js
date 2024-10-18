const express = require('express');
const salaRoutes = require('./routes/salaRoutes');
const app = express();
const port = 25000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// Usar as rotas
app.use('/', salaRoutes);

app.listen(port, () => {
    console.log(`Servidor EJS rodando em http://localhost:${port}`);
});
