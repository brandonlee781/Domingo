import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'dmg-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  private sub:any;
  public recipe;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];

      this.recipe = this.recipeService.getRecipeById(id);
    });
  }
}
