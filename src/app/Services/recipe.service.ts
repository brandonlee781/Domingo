import { Injectable } from '@angular/core';

let data = require('./../../assets/mock-data.js');

@Injectable()
export class RecipeService {

  constructor() { }

  getRecipes() {
    return data.default;
  }

  getRecipeById(id: string) {
    let filtered = data.default.filter(item => {
      if(item.id === id) {
        return item;
      }
    })
    return filtered[0];
  }

}
