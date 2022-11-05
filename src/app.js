import { config } from 'dotenv';
config();
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';

const app_ = express();
import { routes } from './routes.js';

app_.use(cors());
app_.use(morgan('dev'));
app_.use(bodyParser.urlencoded({ extended: false }));
app_.use(bodyParser.json());

routes(app_);

export const app = app_;
