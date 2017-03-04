import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'dmg-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    console.log(this.recipes);
  }

}
