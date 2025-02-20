const pool = require('../config/db');

class Accueil {
  static async getContent() {
    const result = await pool.query('SELECT * FROM accueil');
    return result.rows;
  }

  static async updateContent(content) {
    const result = await pool.query('UPDATE "accueil" SET content = $1 RETURNING *', [content]);
    return result.rows[0];
  }
}

module.exports = Accueil;