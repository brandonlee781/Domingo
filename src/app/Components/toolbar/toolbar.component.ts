import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/startWith';
import { Observable } from 'rxjs/Rx';
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
  recipes: FirebaseListObservable<any[]>;

  constructor(private recipeService: RecipeService, private af: AngularFire) {
    this.searchCtrl = new FormControl();
    this.recipes = this.recipeService.getRecipes();
    // this.recipeService.getRecipes().subscribe( values => {this.recipes = values} );
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
    return val ? this.recipes.filter((s) => new RegExp(val, 'gi').test(s)) : this.recipes;
  }

}
