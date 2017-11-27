import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import logger from 'morgan';
import { errorHandler } from './middlewares';

const app = express();

app.use(compression());
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use('*', (req, res) => res.sendStatus(404));
app.use(errorHandler());

export default app;
