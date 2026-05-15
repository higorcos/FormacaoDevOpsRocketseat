
const http = require('http');

// Define a porta e o host
const PORT = 3000;
const HOST = '0.0.0.0';

// Cria o servidor
const server = http.createServer((req, res) => {
    // Define o cabeçalho da resposta para JSON
    res.setHeader('Content-Type', 'application/json');

    // Analisa a URL e o método HTTP
    if (req.url === '/api/saudacao' && req.method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ mensagem: 'Olá! Esta é uma API sem dependências.' }));
    } else {
        // Rota não encontrada
        res.statusCode = 404;
        res.end(JSON.stringify({ erro: 'Rota não encontrada' }));
    }
});

// Faz o servidor escutar na porta definida
server.listen(PORT, HOST, () => {
    console.log(`Servidor rodando em http://${HOST}:${PORT}/`);
    console.log(`Teste a API em: http://${HOST}:${PORT}/api/saudacao`);
});
