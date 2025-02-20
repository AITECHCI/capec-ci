const pool = require('../config/db');

class APropos {
  static async getAll() {
    const result = await pool.query('SELECT * FROM "APropos"');
    return result.rows;
  }

  static async create(title, content) {
    const result = await pool.query(
      'INSERT INTO "APropos" (title, content) VALUES ($1, $2) RETURNING *',
      [title, content]
    );
    return result.rows[0];
  }

  static async update(id, title, content) {
    const result = await pool.query(
      'UPDATE "APropos" SET title = $1, content = $2 WHERE id = $3 RETURNING *',
      [title, content, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM "APropos" WHERE id = $1', [id]);
    return { message: 'Entrée supprimée avec succès' };
  }
}

module.exports = APropos;