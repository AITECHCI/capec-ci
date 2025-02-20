const pool = require('../config/db');

class Recherches {
  static async getAll() {
    const result = await pool.query('SELECT * FROM "Recherches"');
    return result.rows;
  }

  static async create(title, description) {
    const result = await pool.query(
      'INSERT INTO "Recherches" (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    return result.rows[0];
  }

  static async update(id, title, description) {
    const result = await pool.query(
      'UPDATE "Recherches" SET title = $1, description = $2 WHERE id = $3 RETURNING *',
      [title, description, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM "Recherches" WHERE id = $1', [id]);
    return { message: 'Recherche supprimée avec succès' };
  }
}

module.exports = Recherches;