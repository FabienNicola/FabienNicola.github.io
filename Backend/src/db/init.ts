import db from '../config/db';

async function initDb() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS map (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        category TEXT,
        hashtags TEXT[],
        image BYTEA
      );
    `);

    console.log('✅ BDD initialisée.');
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation de la BDD :', error);
  } finally {
    process.exit();
  }
}

initDb();
