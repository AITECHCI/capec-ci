const pool = require('../config/db');

class Medias {
  static async getAll() {
    const result = await pool.query('SELECT * FROM "Medias"');
    return result.rows;
  }

  static async create(type, url) {
    const result = await pool.query(
      'INSERT INTO "Medias" (type, url) VALUES ($1, $2) RETURNING *',
      [type, url]
    );
    return result.rows[0];
  }

  static async update(id, type, url) {
    const result = await pool.query(
      'UPDATE "Medias" SET type = $1, url = $2 WHERE id = $3 RETURNING *',
      [type, url, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM "Medias" WHERE id = $1', [id]);
    return { message: 'Média supprimé avec succès' };
  }
}

module.exports = Medias;