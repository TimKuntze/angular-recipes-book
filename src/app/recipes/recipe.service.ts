import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://runningonrealfood.com/wp-content/uploads/2021/01/Vegan-Slow-Cooker-Red-Lentil-Chili-Recipe-5-700x1049.jpg'),
    new Recipe('Test Recipe 2', 'Test Description 2', 'https://ais.kochbar.de/vms/5ced0e371d90da128862f2c2/24-05goci/600x450/167/burger.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
