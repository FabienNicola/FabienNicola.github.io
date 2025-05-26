import db from "../config/db";

export async function getCurrentTime() {
  const result = await db.query('SELECT NOW()');
  return result.rows[0];
}