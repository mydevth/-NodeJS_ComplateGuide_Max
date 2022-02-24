// const http = require('http');
const express = require('express');
const app = express();
// const server = http.createServer(app);
app.listen(3000);

app.use('/user', (req, res, next) => {
  console.log('The middleware User');
  res.send('<h1>The User Page</h1>');
});


app.use('/', (req, res, next) => {
  console.log('The Middleware root');
  res.send('<h1>The Root Page</h1>');
})