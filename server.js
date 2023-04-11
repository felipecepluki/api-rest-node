const http = require("http");
const port = 3000;

const routes = {
  "/": "Curso de Node.js",
  "/livros": "Entrei na pagina de livros",
  "/autores": "Listagem de autores",
  "/editora": "Pagina de editora",
  "/sobre": "Informacao sobre o projeto",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(routes[req.url]);
});

server.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
