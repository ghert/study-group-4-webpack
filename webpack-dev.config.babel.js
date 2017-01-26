'use strict';

import { assign } from 'lodash';
import baseConfig from './webpack-base';

export default assign({}, baseConfig, {
  output: {
    path: '/',
    filename: '[name]-[hash].js'
  }
});
