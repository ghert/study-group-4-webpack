'use strict';

import config from './webpack-dev.config.babel';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const devSeverConfig = {
  domain: 'localhost',
  port: 8000,
  historyApiFallback: true,
  hot: true,
  stats: {
    colors: true,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
    modules: false,
    children: true,
    version: true,
    cached: false,
    cachedAssets: false,
    reasons: false,
    source: false,
    errorDetails: true
  }
};

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, devSeverConfig);

server.listen(3000);
