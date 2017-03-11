import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../Services/recipe.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'dmg-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: FirebaseListObservable<any[]>;

  constructor(private af: AngularFire) {
    this.recipes = af.database.list('/recipes');
  }

  ngOnInit() {
  }

}
