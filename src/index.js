import express from 'express';

const app = express();
app.use('*', (req, res) => res.sendStatus(404));

export default app;
