const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000

app.use("/view", express.static('view'));

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// rendering html
app.use(express.static(__dirname + '/view'));
app.get('/',(_, res) => {
  res.sendFile(path.join(__dirname+'/view/index.html'));
});

app.listen(port, () => {
  console.log(`server listening port ${port}`);
});
