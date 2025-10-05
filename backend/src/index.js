import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { app } from './app.js';
import { connectDB } from './config/db.js';


dotenv.config({
    path: "./.env"
});




