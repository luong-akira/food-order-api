// const { ValidationError } = require('joi');
const _ = require('lodash');
import { CONFIG } from '@commons/constant';

export function wrapErrorJSON(error, message = null, ex = '') {
  return {
    status: 0,
    code: error.code,
    msg: message || error.message,
    ex: ex || ex,
    data: {},
  };
}

