import express from 'express';
import { SkaiciuokleController } from '../conrollers/skaiciuokle.controller'; 
const skaiciuokleRouter=express.Router();

skaiciuokleRouter.post('/skaiciuoti', SkaiciuokleController.apskaiciuoti);
skaiciuokleRouter.get('/skaiciai', SkaiciuokleController.skaiciai);

export {skaiciuokleRouter};