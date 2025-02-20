const pool = require('../config/db');

class Activites {
  static async getAll() {
    const result = await pool.query('SELECT * FROM "Activites"');
    return result.rows;
  }

  static async create(title, date) {
    const result = await pool.query(
      'INSERT INTO "Activites" (title, date) VALUES ($1, $2) RETURNING *',
      [title, date]
    );
    return result.rows[0];
  }

  static async update(id, title, date) {
    const result = await pool.query(
      'UPDATE "Activites" SET title = $1, date = $2 WHERE id = $3 RETURNING *',
      [title, date, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM "Activites" WHERE id = $1', [id]);
    return { message: 'Activité supprimée avec succès' };
  }
}

module.exports = Activites;