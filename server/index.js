const https = require("https");
const consola = require("consola");
const app = require("./app");
const { URL } = require("url");

async function start() {
  const host = "localhost";
  const port = 5000;

  // Give nuxt middleware to express

  // const port = 1000

  // Listen the server

  var fs = require("fs");
  // var sslcert = fs.readFileSync(
  //   "/etc/letsencrypt/live/rabota-nt.ru/cert.pem",
  //   "utf8"
  // );
  // var sslkey = fs.readFileSync(
  //   "/etc/letsencrypt/live/rabota-nt.ru/privkey.pem",
  //   "utf8"
  // );
  // var options = {
  //   key: sslkey,
  //   cert: sslcert,
  //   passphrase: "babylon5",
  // };

  // const server = https.createServer(options, app);
  // console.log("Server trying starting");
  // server.listen(port, "0.0.0.0", () => {
  //   consola.ready({
  //     message: `Server listening on https://${host}:${port}`,
  //     badge: true,
  //   });
  // });

  const http = require("http");
  console.log(`Starting Server listening on http://${host}:${port}`);
  http
    .createServer((req, res) => {
      res.writeHead(301, {
        // Location: "https://" + req.headers["host"] + req.url,
        Location: "https://rabota-nt.ru",
      });
      //res.send("Hello World!");

      res.end();
    })
    .listen(80);
}

start();
