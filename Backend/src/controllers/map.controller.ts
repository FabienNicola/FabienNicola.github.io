import { Request, Response } from 'express';
import { getCurrentTime } from '../models/map.model';

export async function getTimeController(_req: Request, res: Response) {
  try {
    const time = await getCurrentTime();
    res.json(time);
  } catch (err) {
    console.error('Erreur de la BDD :', err);
    res.status(500).json({ error: 'Erreur DB' });
  }
}