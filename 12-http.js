const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("welcome to our home");

  if (req.url === "/about") res.end("welcome to our about");

  res.end(`<h1> oops</h1>
    <p1>  We can't serve anything</p1>`);
});

server.listen(8080);
