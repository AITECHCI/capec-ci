const pool = require('../config/db');

class Etudes {
  static async getAll() {
    const result = await pool.query('SELECT * FROM "Etudes"');
    return result.rows;
  }

  static async create(title, description) {
    const result = await pool.query(
      'INSERT INTO "Etudes" (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    return result.rows[0];
  }

  static async update(id, title, description) {
    const result = await pool.query(
      'UPDATE "Etudes" SET title = $1, description = $2 WHERE id = $3 RETURNING *',
      [title, description, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM "Etudes" WHERE id = $1', [id]);
    return { message: 'Étude supprimée avec succès' };
  }
}

module.exports = Etudes;