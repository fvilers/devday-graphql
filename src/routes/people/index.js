import express from 'express';
import find from './find';
import get from './get';

const router = express.Router();
router.get('/', find());
router.get('/:id', get());

export default () => router;
