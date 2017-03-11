import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class RecipeService {
  constructor(public af: AngularFire) {}

  getRecipes() {
    return this.af.database.list('/recipes');
  }

  getRecipeById(id: string) {
    return this.af.database.object(`/recipes/${id}`);
  }

}
