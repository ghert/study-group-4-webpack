'use strict';

import { defaultsDeep } from 'lodash';
import { HotModuleReplacementPlugin } from 'webpack';
import baseConfig from './webpack-base';

const webpackConfig = defaultsDeep({
  entry: {
    webpackHot: 'webpack/hot/dev-server',
    webpackDevServer: 'webpack-dev-server/client?http://localhost:3000/'
  },
  output: {
    path: '/'
  }
}, baseConfig);

webpackConfig.plugins.push(new HotModuleReplacementPlugin());

export default webpackConfig;