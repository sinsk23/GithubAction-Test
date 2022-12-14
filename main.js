const express = require('express');
const http = require("http");
const app = express();
const PORT = process.env.PORT || 3777;
const HOST = process.env.HOST || 'localhost';


app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hello Git Action!");
  });

http.createServer(app).listen(PORT,HOST, () => {
    console.log(`Server Listening on ${HOST}:${PORT}`);
});

module.exports = app;
// 테스트 주석 추가