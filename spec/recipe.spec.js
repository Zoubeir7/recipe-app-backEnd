import { Recipe } from "../src/models/Recipe.js";

describe("Recipe Model Tests", () => {
  let recipeId;
  const categoryId = 1; // Utilisez un ID de catégorie valide

  it("can create a recipe", async () => {
    const recipe = {
      title: "Mafédoom",
      type: "dessert",
      ingredients: "sel, eau, ll",
      category_id: categoryId, // Ajout de la propriété category_id
    };

    recipeId = await Recipe.createRecipe(
      recipe.title,
      recipe.type,
      recipe.ingredients,
      recipe.category_id, // Ajout de category_id ici aussi
    );
    const recipeCreated = await Recipe.getRecipes();
    const createdRecipe = recipeCreated.find((r) => r.id === recipeId);

    expect(recipeId).not.toBeNull();
    expect(createdRecipe).not.toBeUndefined();
    expect(createdRecipe.title).toBe(recipe.title);
    expect(createdRecipe.type).toBe(recipe.type);
    expect(createdRecipe.ingredients).toBe(recipe.ingredients);
    expect(createdRecipe.category_id).toBe(recipe.category_id); // Vérification du category_id
  });

  it("can retrieve all recipes", async () => {
    const allRecipes = await Recipe.getRecipes();

    expect(allRecipes).not.toBeNull();
    expect(Array.isArray(allRecipes)).toBe(true);
  });

  it("can update a recipe", async () => {
    const updatedRecipe = {
      title: "Updated Mafé",
      type: "plat",
      ingredients: "sel, eau, riz",
      category_id: categoryId, // Ajout de category_id lors de la mise à jour
    };

    const result = await Recipe.updateRecipe(
      recipeId,
      updatedRecipe.title,
      updatedRecipe.type,
      updatedRecipe.ingredients,
      updatedRecipe.category_id, // Mise à jour du category_id
    );
    const updatedRecipeFromDb = await Recipe.getRecipes();
    const updatedRecipeObj = updatedRecipeFromDb.find((r) => r.id === recipeId);

    expect(result).toBe(true);
    expect(updatedRecipeObj.title).toBe(updatedRecipe.title);
    expect(updatedRecipeObj.type).toBe(updatedRecipe.type);
    expect(updatedRecipeObj.ingredients).toBe(updatedRecipe.ingredients);
    expect(updatedRecipeObj.category_id).toBe(updatedRecipe.category_id); // Vérification du category_id
  });

  it("can delete a recipe", async () => {
    const result = await Recipe.destroyRecipe(recipeId);
    const recipesAfterDeletion = await Recipe.getRecipes();

    const recipeAfterDeletion = recipesAfterDeletion.find(
      (r) => r.id === recipeId,
    );

    expect(result).toBe(true);
    expect(recipeAfterDeletion).toBeUndefined();
  });
});
