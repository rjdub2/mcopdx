const express = require('express');

const port = 3000 || process.env.PORT;
const app = express();
var path = require('path');

// app.use(express.static('img'));
// app.use(express.static('js'));
app.use(express.static(path.join(__dirname, 'public')));


// viewed at http://localhost:8080
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, () => {
   console.log(`Listening on: http://localhost:${port}`);
});