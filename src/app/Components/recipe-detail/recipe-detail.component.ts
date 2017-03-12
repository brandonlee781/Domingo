import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { MdMenuTrigger } from '@angular/material';
import { RecipeService } from '../../Services/recipe.service';
import { Recipe } from '../../Models/recipe.model';

@Component({
  selector: 'dmg-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  private sub:any;
  @Input() recipe: Recipe;
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;
  @Input() cardState: Boolean;
  @Output() cardStateChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {
    
  }

  openMenu(e) {
    e.stopPropagation();
    this.trigger.openMenu();
  }

  ngOnInit() {
  }

  toggleCard() {
    this.cardStateChange.emit(!this.cardState);
  }
}
