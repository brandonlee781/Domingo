import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'dmg-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  private sub:any;
  public recipe;

  constructor(private route: ActivatedRoute, private af: AngularFire) {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.recipe = af.database.object(`/recipes/${id}`);
    });
  }

  ngOnInit() {
  }
}
