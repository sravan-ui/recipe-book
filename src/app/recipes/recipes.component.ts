import { Component, OnInit } from '@angular/core';
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import { Recipe } from "./recipe";

@Component({
  moduleId: module.id,
  selector: 'recipes',
  templateUrl: 'recipes.component.html',
  directives: [RecipeListComponent,RecipeDetailComponent]

})
export class RecipesComponent implements OnInit{

  selectedRecipe: Recipe;
  constructor() {}

  ngOnInit() {
  }

}
