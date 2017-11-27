import express from 'express';
import compression from 'compression';

const app = express();

app.use(compression());
app.use('*', (req, res) => res.sendStatus(404));

export default app;
