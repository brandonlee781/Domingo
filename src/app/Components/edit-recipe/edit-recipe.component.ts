import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../../Services/recipe.service';
import { Recipe } from '../../Models/recipe.model';

@Component({
  selector: 'dmg-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  private sub: any;
  private id: any;
  public recipe: Recipe;
  title: string = 'Create a new recipe';


  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.title = 'Edit a recipe';
        this.recipeService.getRecipeById(this.id)
          .subscribe(data => this.recipe = data);
      };
    })
  }

  ngOnInit() {}

  createNew() {
    if (this.id) {
      this.recipeService.updateRecipe(this.id, this.recipe);
    } 
    this.router.navigate(['/']);
  }

}
