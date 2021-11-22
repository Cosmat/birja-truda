
var fs = require("fs")
const http = require("http")
const https = require("https")
var sslcert = fs.readFileSync(
  "/etc/letsencrypt/live/rabota-nt.ru/fullchain.pem",
  "utf8"
)
var sslkey = fs.readFileSync(
  "/etc/letsencrypt/live/rabota-nt.ru/privkey.pem",
  "utf8"
)
var dhparam = fs.readFileSync("/home/pi/Desktop/v_07/server/dhparam.pem", "utf8")
var options = {
  key: sslkey,
  cert: sslcert,
  dhparam: dhparam,
}

const app = require("./app")

async function start() {
  console.log(`Starting Server!`)
  // var httpServer = http.createServer(app)
  var httpsServer = https.createServer(options, app)

  const http = require("http")
  
  http
    .createServer((req, res) => {
      res.writeHead(301, {
        Location: "https://rabota-nt.ru",
      })

      res.end()
    })
    .listen(8080)

  // httpServer.listen(8080)
  httpsServer.listen(8443)
}

start()
