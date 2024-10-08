import { Recipe } from '../models/Recipe.js';

class RecipeController {

  static async getByID(req, res) {
    try {
      const id = req.params.id;
      const result = await Recipe.getRecipeById(id);
      if (!result) {
        return res.status(404).json({ error: 'Recipe not found' });
      }
      res.json(result);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ error: 'Server error' });
    }
  }


  static async getAllRecipes(_req, res) {
    try {
      const result = await Recipe.getRecipes();
      res.json(result);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ error: 'Server error' });
    }
  }


  static async createRecipe(req, res) {
    try {
      const { title, type, ingredients, category_id } = req.body;

      if (!title || !type || !ingredients || !category_id) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      await Recipe.createRecipe(title, type, ingredients, category_id);
      res.status(201).json('Recipe added successfully');
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ error: 'Server error' });
    }
  }


  static async deleteRecipe(req, res) {
    try {
      const id = req.params.id;
      const exists = await Recipe.existsById(id);

      if (!exists) {
        return res.status(404).json({ error: 'Recipe not found' });
      }

      await Recipe.destroyRecipe(id);
      res.json('Recipe deleted successfully');
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ error: 'Server error' });
    }
  }

  static async updateRecipe(req, res) {
    try {
      const id = req.params.id;
      const { title, type, ingredients, category_id } = req.body;


      if (!title || !type || !ingredients || !category_id) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      const exists = await Recipe.existsById(id);
      if (!exists) {
        return res.status(404).json({ error: 'Recipe not found' });
      }

      await Recipe.updateRecipe(id, title, type, ingredients, category_id);
      res.json('Recipe updated successfully');
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ error: 'Server error' });
    }
  }
}

export { RecipeController };
