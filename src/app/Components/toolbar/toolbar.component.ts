import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from '../../Services/recipe.service';

@Component({
  selector: 'dmg-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  searchCtrl: FormControl;
  searching: boolean = false;
  searchTerm: string = '';
  filteredRecipes: any;
  recipesArray: string[] = [];

  constructor(private recipeService: RecipeService) {
    this.searchCtrl = new FormControl();
    var recipes = this.recipeService.getRecipes();
    recipes.forEach((item) => {
      this.recipesArray.push(item.name);
    });
    this.filteredRecipes = this.searchCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterRecipes(name));
  }

  ngOnInit() {
  }

  toggleSearchBar() {
    this.searching = !this.searching;
  }

  filterRecipes(val: string) {
    return val ? this.recipesArray.filter((s) => new RegExp(val, 'gi').test(s)) : this.recipesArray;
  }

}
