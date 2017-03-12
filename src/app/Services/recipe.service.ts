import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Recipe } from '../Models/recipe.model';
const uuidv4 = require('uuid/v4')

@Injectable()
export class RecipeService {
  constructor(public af: AngularFire) {}

  // Create
  createRecipe(data: Recipe) {
    for (let prop in data) {
      if (data[prop] === null) data[prop] = 0;
    }
    for (let prop in data.time) {
      if (data.time[prop] === null) data.time[prop] = 0;
    }
    this.af.database.list('/recipes').push(data);
  }

  // Read
  getRecipes() {
    return this.af.database.list('/recipes');
  }

  getRecipeById(id: String) {
    return this.af.database.object(`/recipes/${id}`);
  }

  // Update
  updateRecipe(id: String, data: Recipe) {
    var item = this.af.database.object(`/recipes/${id}`);
    item.update(data);
  }


  // Delete
  deleteRecipe(id: string) {
    this.af.database.object(`/recipes/${id}`).remove();
  }
}
