import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MdMenuTrigger } from '@angular/material';
import { Recipe } from '../../Models/recipe.model';

@Component({
  selector: 'dmg-recipe-thumb',
  templateUrl: './recipe-thumb.component.html',
  styleUrls: ['./recipe-thumb.component.scss']
})
export class RecipeThumbComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() cardState: Boolean;
  @Output() cardStateChange: EventEmitter<Boolean> = new EventEmitter<Boolean>();
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  constructor() { }

  ngOnInit() {
  }

  openMenu(e) {
    e.stopPropagation();
    this.trigger.openMenu();
  }

  toggleCard() {
    this.cardStateChange.emit(!this.cardState);
  }

}
