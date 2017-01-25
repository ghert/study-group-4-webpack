import {documentWrite} from './modules/common';
import copy from './copy';
import {log} from './modules/log';
import {clamp} from './modules/math';
import './styles/main.scss';
// import config from 'config';

documentWrite(`<h1>${copy.main} []</h1><p>It works!</p>`);

log('Clamped value: ' + clamp(Math.random(), .25, .75));
