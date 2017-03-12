import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../Services/recipe.service';
import { ListStateService } from '../../Services/list-state.service';
import { FirebaseListObservable } from 'angularfire2';
import { Recipe } from '../../Models/recipe.model';

@Component({
  selector: 'dmg-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: FirebaseListObservable<Recipe[]>;
  isCardOpen: Array<Boolean> = [];

  constructor(private recipeService: RecipeService, private listStateService: ListStateService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipes.forEach((item) => {
      this.isCardOpen.push(false);
    });
  }

}
