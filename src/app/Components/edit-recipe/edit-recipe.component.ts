import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { RecipeService } from '../../Services/recipe.service';

const uuidv4 = require('uuid/v4');

@Component({
  selector: 'dmg-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  private sub: any;
  private id: any;

  public recipeName: string;
  public ingredients: string;
  public directions: string;
  public serving: number;
  public prepTime: number;
  public cookTime: number;
  title: string = 'Create a new recipe';


  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        let recipe = this.recipeService.getRecipeById(this.id);

        this.title = 'Edit a recipe';
        this.recipeName = recipe.name;
        this.ingredients = recipe.ingredients.join('\n');
        this.directions = recipe.direction;
        this.serving = recipe.serves;
        this.prepTime = recipe.time.prep;
        this.cookTime = recipe.time.cook;

      }
      
    });
  }

  createNew() {
    var newObject = {
      id: '',
      name: this.recipeName,
      ingredients: this.ingredients.split('\n'),
      direction: this.directions,
      serves: this.serving,
      time: {
        prep: this.prepTime,
        cook: this.cookTime
      }
    };
    if (this.id) {
      newObject.id = this.id;
    } else {
      newObject.id = uuidv4();
    }
    console.log(newObject);
  }

}
