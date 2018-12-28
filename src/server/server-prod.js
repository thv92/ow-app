const express = require('express');
const middleware = require('webpack-dev-middleware');
const config = require('../../webpack.config.dev');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

console.log(config.mode);
app.use(express.static(__dirname));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function(){
    console.log(process.argv);
    console.log(`Listening on port: ${port}`);
});

