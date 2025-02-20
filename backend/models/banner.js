const pool = require('../config/db');

class Banner {
  static async getAllBanners() {
    const result = await pool.query('SELECT * FROM banner');
    return result.rows;
  }

  static async createBanner(bannerData) {
    const { bgThumb, title, title1, title2, Image, btnText, shapeThumb, videoId } = bannerData;
    const result = await pool.query(
      'INSERT INTO banner (bgThumb, title, title1, title2, Image, btnText, shapeThumb, videoId) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
      [bgThumb, title, title1, title2, Image, btnText, shapeThumb, videoId]
    );
    return result.rows[0];
  }
}

module.exports = Banner;