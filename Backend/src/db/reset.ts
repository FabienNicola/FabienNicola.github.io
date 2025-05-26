import db from '../config/db';

async function resetDb() {
  try {
    await db.query(`DROP TABLE IF EXISTS map`);

    await db.query(`
      CREATE TABLE map (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        category TEXT,
        hashtags TEXT[],
        image BYTEA
      );
    `);

    console.log('♻️ Base de données réinitialisée.');
  } catch (error) {
    console.error('❌ Erreur lors du reset de la BDD :', error);
  } finally {
    process.exit();
  }
}

resetDb();
