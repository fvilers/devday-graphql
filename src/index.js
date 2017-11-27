import express from 'express';
import compression from 'compression';
import helmet from 'helmet';

const app = express();

app.use(compression());
app.use(helmet());
app.use('*', (req, res) => res.sendStatus(404));

export default app;
