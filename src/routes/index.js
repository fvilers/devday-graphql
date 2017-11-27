import express from 'express';
import people from './people';

const router = express.Router();
router.use('/people', people());

export default () => router;
