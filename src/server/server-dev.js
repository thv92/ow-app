const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const hot = require('webpack-hot-middleware');
const config = require('../../webpack.config.dev');
const compiler = webpack(config);
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// app.use(express.static(__dirname));
app.use(middleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(hot(compiler));


//redirect all routes to index.html
app.get('*', (req, res, next) => {
    //Why doesn't "__dirname + index.html" work? Possibly because
    //Executing script of bundle.js is in /dist.
    const filename = path.resolve(compiler.outputPath, 'index.html');
    compiler.outputFileSystem.readFile(filename, (err, result) => {
        if (err) return next(err);
        res.set('content-type', 'text/html');
        res.send(result);
        res.end();
    });
});

app.listen(port, function(){
    console.log(__dirname);
    console.log(config.output);
    console.log("Serving files from: " + path.resolve(compiler.outputPath, 'index.html'));
    console.log(`Listening on port: ${port}`);
});

