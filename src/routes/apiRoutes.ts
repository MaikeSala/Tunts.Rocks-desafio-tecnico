import { Router, Request, Response } from 'express';
import { GoogleApis } from 'googleapis';
import * as getDataController from './controllers/getDataController';

const router = Router();

router.get('/metadata',getDataController.metadata);

router.get('/getRows', getDataController.getRows);


export default router;

