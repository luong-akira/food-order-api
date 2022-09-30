import * as express from 'express';
import { verify } from 'jsonwebtoken';
import { IS_ACTIVE, apiCode, USER_STATUS, ROLE, AppError } from '@commons/constant';
import { verifyJWTToken } from '@config/auth';
const db = require('@models');
const { DFProvince, sequelize, Sequelize, User } = db.default;
// import { AuthorizedUser } from '@commons/types';

export function expressAuthentication(request: express.Request, securityName: string, scopes?: string[]): Promise<any> {
  if (securityName === 'jwt') {
    const token = request.headers['token'];
    if (!token) {
      return Promise.reject(apiCode.INVALID_ACCESS_TOKEN);
    }

    return verifyJWTToken(token).then((decodedToken: any) => {
      console.log('authorized', decodedToken, scopes);
      const foundRole = Object.keys(ROLE).find((k) => k.toLowerCase() == decodedToken?.data?.role);

      if (scopes && scopes.length > 0) {
        if (foundRole && scopes.includes(foundRole.toLowerCase())) {
          return decodedToken;
        }
        throw new AppError(apiCode.UNAUTHORIZED);
      }
      return decodedToken;
    });
  }
  return Promise.reject({});
}
