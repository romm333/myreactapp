// redundant server app used in the beginnig of the course

const express = require('express');

const path = require('path');

const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

const webpackCompiler = webpack(webpackConfig);

function skipFavicon(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).json({ nope: true });
  } else {
    next();
  }
}

const app = express();

app.use(skipFavicon);
app.use(express.static('build'));

app.use(
  require('webpack-dev-middleware')(webpackCompiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(
  require('webpack-hot-middleware')(webpackCompiler, {
    path: '/__webpack_hmr'
  })
);

app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('Min flotte app lytter på', app.get('port'));
});
