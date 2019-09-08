import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import logger from 'morgan';
import { errors } from 'celebrate';
import authenticate from '@/helpers/authenticate';
import userRoute from './user.route';
import accountRoute from './account.route';

const router = express.Router();

// Body parser.
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
// Enable cors.
router.use(cors());
// Logger.
router.use(logger('dev'));

// API routes.
router.use('/user', authenticate, userRoute);
router.use('/account', accountRoute);

// Celebrate validation errors.
router.use(errors());

export default router;
