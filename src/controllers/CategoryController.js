import { Category } from '../models/Category.js';

class CategoryController {
  static async getById(req, res) {
    try {
      const id = req.params.id;
      const result = await Category.getCategoryById(id);
      if (!result) {
        return res.status(404).json({ message: 'Category not found' });
      }
      res.json(result);
    } catch (e) {
      console.error(e.message);
      res
        .status(500)
        .json({ message: 'Erreur lors de la récupération de la catégorie' });
    }
  }

  static async getAllCategories(_req, res) {
    try {
      const result = await Category.getCategories();
      res.json(result);
    } catch (e) {
      console.error(e.message);
      res
        .status(500)
        .json({ message: 'Erreur lors de la récupération des catégories' });
    }
  }

  static async createCategory(req, res) {
    try {
      const name = req.body.name;
      if (!name) {
        return res.status(400).json({ message: 'Category name is required' });
      }
      await Category.createCategory(name);
      res.status(201).json('Category added successfully');
    } catch (e) {
      console.error(e.message);
      res.status(500).json({ message: 'Erreur lors de la création de la catégorie' });
    }
  }

  static async deleteCategory(req, res) {
    try {
      const id = req.params.id;
      const exists = await Category.getCategoryById(id);

      if (!exists) {
        return res.status(404).json({ message: 'Category not found' });
      }

      await Category.destroyCategory(id);
      res.json('Category deleted successfully');
    } catch (e) {
      console.error(e.message);
      res
        .status(500)
        .json({ message: 'Erreur lors de la suppression de la catégorie' });
    }
  }

  static async updateCategory(req, res) {
    try {
      const id = req.params.id;
      const name = req.body.name;

      if (!name) {
        return res.status(400).json({ message: 'Category name is required' });
      }

      const exists = await Category.getCategoryById(id);
      if (!exists) {
        return res.status(404).json({ message: 'Category not found' });
      }

      await Category.updateCategory(id, name);
      res.json('Category updated successfully');
    } catch (e) {
      console.error(e.message);
      res
        .status(500)
        .json({ message: 'Erreur lors de la mise à jour de la catégorie' });
    }
  }
}

export { CategoryController };
