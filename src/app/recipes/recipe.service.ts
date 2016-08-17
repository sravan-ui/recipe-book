import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/Ingredient';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Sandwhich', 'Very Tasty', 'http://www.grotecompany.com/wp-content/uploads/2009/12/sandwich-production.jpg', [
      new Ingredient('French Fries',2),
      new Ingredient('Pork Meat',1)
    ]),

    new Recipe('Sea Fish', 'Very Yummy', 'http://1.bp.blogspot.com/_Dypi2TpDAng/Se5HelE-60I/AAAAAAAABo8/c0O687eQqo4/s400/IMG_2738.JPG', [])
  ];

  constructor() {}

  getRecipes(){
    return this.recipes;
  }

}
