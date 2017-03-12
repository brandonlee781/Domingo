import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
const uuidv4 = require('uuid/v4')

@Injectable()
export class RecipeService {
  constructor(public af: AngularFire) {}

  // Create
  createRecipe() {

  }

  // Read
  getRecipes() {
    return this.af.database.list('/recipes');
  }

  getRecipeById(id: string) {
    return this.af.database.object(`/recipes/${id}`);
  }

  // Update
  updateRecipe(id, data) {
    var item = this.af.database.object(`/recipes/${id}`);
    item.update(data);
  }


  // Delete

}
