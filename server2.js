const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.get("/pokeinfo/:name", (req, res) => {
        app.render(req, res, "/poke", req.params)
    })
    server.get("*", (req, res) => {
        handle(req, res)
    })
    server.listen(3000, err => {
        if (err) throw err;
        console.log('listening port 3000')
    })
});