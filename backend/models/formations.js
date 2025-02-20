const pool = require('../config/db');

class Formations {
  static async getAll() {
    const result = await pool.query('SELECT * FROM "Formations"');
    return result.rows;
  }

  static async create(title, description) {
    const result = await pool.query(
      'INSERT INTO "Formations" (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );
    return result.rows[0];
  }

  static async update(id, title, description) {
    const result = await pool.query(
      'UPDATE "Formations" SET title = $1, description = $2 WHERE id = $3 RETURNING *',
      [title, description, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM "Formations" WHERE id = $1', [id]);
    return { message: 'Formation supprimée avec succès' };
  }
}

module.exports = Formations;