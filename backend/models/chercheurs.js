const pool = require('../config/db');

class Chercheurs {
  static async getAll() {
    const result = await pool.query('SELECT * FROM "Chercheurs"');
    return result.rows;
  }

  static async create(name, specialization) {
    const result = await pool.query(
      'INSERT INTO "Chercheurs" (name, specialization) VALUES ($1, $2) RETURNING *',
      [name, specialization]
    );
    return result.rows[0];
  }

  static async update(id, name, specialization) {
    const result = await pool.query(
      'UPDATE "Chercheurs" SET name = $1, specialization = $2 WHERE id = $3 RETURNING *',
      [name, specialization, id]
    );
    return result.rows[0];
  }

  static async delete(id) {
    await pool.query('DELETE FROM "Chercheurs" WHERE id = $1', [id]);
    return { message: 'Chercheur supprimé avec succès' };
  }
}

module.exports = Chercheurs;