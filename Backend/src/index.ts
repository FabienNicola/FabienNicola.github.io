import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mapRoutes from './routes/map.route';


// Charger les variables d'environnement
dotenv.config();

// Création de l'app Express
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares de base
app.use(cors());
app.use(express.json());

// Route de test
app.get('/', (_req, res) => {
  res.send('Serveur Worldmaker en TypeScript 🚀');
});

// Lancement du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});

app.use('/api', mapRoutes);