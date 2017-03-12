import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../Services/recipe.service';
import { Recipe } from '../../Models/recipe.model';

@Component({
  selector: 'dmg-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {
  private sub: any;
  private id: any;
  public recipe: Recipe;
  title: string = 'Create a new recipe';


  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.title = 'Edit a recipe';
        this.recipeService.getRecipeById(this.id)
          .subscribe(data => this.recipe = data);
      } else {
        // Set defaults
        this.recipe = {
          name: '',
          ingredients: [],
          direction: '',
          serves: null,
          time: {
            prep: null,
            cook: null
          }
        }
      };
    })
  }

  createNew() {
    if (this.id) {
      this.recipeService.updateRecipe(this.id, this.recipe);
    } else {
      this.recipeService.createRecipe(this.recipe);
    }
    this.router.navigate(['/']);
  }

}
