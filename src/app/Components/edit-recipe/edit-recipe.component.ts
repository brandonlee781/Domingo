import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

const uuidv4 = require('uuid/v4');

@Component({
  selector: 'dmg-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit {
  private sub: any;
  private id: any;

  public recipeName;
  public ingredients;
  public directions;
  public serving;
  public prepTime;
  public cookTime;
  title: string = 'Create a new recipe';


  constructor(private route: ActivatedRoute, private af: AngularFire, private router: Router) {
    this.sub = this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        af.database.object(`/recipes/${this.id}`, { preserveSnapshot: true })
          .subscribe( item => {
            var recipe = item.val();
            this.title = 'Edit a recipe';
            this.recipeName = recipe.name;
            this.ingredients = recipe.ingredients.join('\n');
            this.directions = recipe.direction;
            this.serving = recipe.serves;
            this.prepTime = recipe.time.prep;
            this.cookTime = recipe.time.cook;
          })

        

      };
      
    })
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      
      
    });
  }

  createNew() {
    var newObject = {
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
      this.af.database.object(`/recipes/${this.id}`).set(newObject);
    } else {
      this.af.database.list('/recipes').push(newObject);
    }
    this.router.navigate(['/recipe', this.id]);
  }

}
