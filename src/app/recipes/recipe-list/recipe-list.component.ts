import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Description', 'https://runningonrealfood.com/wp-content/uploads/2021/01/Vegan-Slow-Cooker-Red-Lentil-Chili-Recipe-5-700x1049.jpg'),
    new Recipe('Test Recipe', 'Test Description', 'https://runningonrealfood.com/wp-content/uploads/2021/01/Vegan-Slow-Cooker-Red-Lentil-Chili-Recipe-5-700x1049.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
