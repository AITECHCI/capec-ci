const pool = require('../config/db');

class Publications {
  static async getAll() {
    const result = await pool.query('SELECT * FROM publications');
    return result.rows;
  }

  static async create(title, link) {
    const result = await pool.query(
      'INSERT INTO "publications" (title, link) VALUES ($1, $2) RETURNING *',
      [title, link]
    );
    return result.rows[0];
  }

  static async update(id, title, link) {
    const result = await pool.query(
      'UPDATE "publications" SET title = $1, link = $2 WHERE id = $3 RETURNING *',
      [title, link, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM "publications" WHERE id = $1', [id]);
    return { message: 'Publication supprimée avec succès' };
  }
}

module.exports = Publications;