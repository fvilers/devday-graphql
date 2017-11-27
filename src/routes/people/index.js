import express from 'express';
import find from './find';

const router = express.Router();
router.get('/', find());

export default () => router;
