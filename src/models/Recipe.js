import { pool } from '../config/db.js';

class Recipe {
  static async getRecipeById(id) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'SELECT * FROM recipes WHERE id = ?',
        [id],
      );
      return result.length > 0 ? result[0] : null;
    } finally {
      connection.release();
    }
  }

  static async getRecipes() {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute('SELECT * FROM recipes');
      return result;
    } finally {
      connection.release();
    }
  }

  static async createRecipe(title, type, ingredients, categoryId) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'INSERT INTO recipes (title, type, ingredients, category_id) VALUES (?, ?, ?, ?)',
        [title, type, ingredients, categoryId],
      );
      return result.insertId;
    } finally {
      connection.release();
    }
  }

  static async updateRecipe(id, title, type, ingredients, categoryId) {
    const connection = await pool.getConnection();
    try {
      await connection.execute(
        'UPDATE recipes SET title = ?, type = ?, ingredients = ?, category_id =? WHERE id = ?',
        [title, type, ingredients, categoryId, id],
      );
      return true;
    } finally {
      connection.release();
    }
  }

  static async destroyRecipe(id) {
    const connection = await pool.getConnection();
    try {
      await connection.execute('DELETE FROM recipes WHERE id = ?', [id]);
      return true;
    } finally {
      connection.release();
    }
  }

  static async checkRecipe(title, id = null) {
    try {
      if (id) {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(
          'select id, title from recettes where title = ? and id != ?',
          [title, id]
        );
        return result;
      } else {
        const connection = await pool.getConnection();
        const [result] = await connection.execute(
          'select id, title from recettes where title = ?',
          [title]
        );
        return result;
      }
    } finally {
      pool.releaseConnection();
    }
  }


  static async existsById(id) {
    const connection = await pool.getConnection();
    try {
      const [result] = await connection.execute(
        'SELECT COUNT(*) as count FROM recipes WHERE id = ?',
        [id],
      );
      return result[0].count;
    } finally {
      connection.release();
    }
  }
}

export { Recipe };
