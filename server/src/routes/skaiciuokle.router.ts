import express from 'express';
import { SkaiciuokleController } from '../controllers/skaiciuokle.controller'; 
const skaiciuokleRouter=express.Router();

skaiciuokleRouter.post('/skaiciuoti', SkaiciuokleController.apskaiciuoti);
skaiciuokleRouter.get('/skaiciai', SkaiciuokleController.skaiciai);

export {skaiciuokleRouter};