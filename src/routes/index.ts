import { Express, Response as ExResponse, Request as ExRequest, NextFunction } from 'express';

import { RegisterRoutes } from './routes'; // here
import * as swaggerUi from 'swagger-ui-express';
import { ValidateError } from 'tsoa';
import { AppError, withError } from '@controllers/models/BaseResponseModel';
import Joi from '../helpers/validationHelper';
import { apiCode, updateServerUrl } from '@commons/constant';

export function initRoutes(app: Express): void {
  app.use(
    '/api/docs/v1',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
      swaggerOptions: {
        url: '/swagger.json',
        docExpansion: 'none',
      },
      explorer: true,
    }),
  );

  app.use((req, res, next) => {
    updateServerUrl(req);
    next();
  });
  RegisterRoutes(app);

  //app.use('/user',);
  app.get('/', (req, res) => res.status(200).send({ message: 'Welcome to base api' }));

  app.use(function errorHandler(err: any, req: ExRequest, res: ExResponse, next: NextFunction): ExResponse | void {
    if (err instanceof ValidateError) {
      console.warn(`Caught Validation Error for ${req.path}:`, err.fields);

      return res.json(withError(err));
    }
    if (err instanceof Joi.ValidationError) {
      let errorDetail = undefined;
      if (err.details) {
        errorDetail = err.details.map((v) => {
          const keyPath = v.path.filter((k) => typeof k === 'string');
          return {
            message: v.message,
            field: keyPath.join('.'),
            localized_key: keyPath.concat(v.type).join('.'),
          };
        });
      }
      return res.json(withError(apiCode.INVALID_PARAM as AppError, errorDetail));
    }
    if (err instanceof Error) {
      console.log(err);
      return res.status(200).json(withError(err));
    }

    return res.json({ status: 0, code: err?.code, message: err.message });
  });

  app.use(function notFoundHandler(_req, res: ExResponse) {
    res.status(404).send({
      message: 'Not Found',
    });
  });

  app.use((err, req, res, next) => {
    return res.status(404).json({ message: err.message, error: { ...err } });
  });
}
