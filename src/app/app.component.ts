import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/recipes.component';
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import { RecipeService } from './recipes/recipe.service';

@Component({
  moduleId: module.id,
  selector: 'book-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent,RecipesComponent,ShoppingListComponent],
  providers: [RecipeService]
})
export class AppComponent {

}
