import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MdMenuTrigger } from '@angular/material';

@Component({
  selector: 'dmg-recipe-thumb',
  templateUrl: './recipe-thumb.component.html',
  styleUrls: ['./recipe-thumb.component.scss']
})
export class RecipeThumbComponent implements OnInit {
  @Input() recipe;
  @ViewChild(MdMenuTrigger) trigger: MdMenuTrigger;

  constructor() { }

  ngOnInit() {
  }

  openMenu(e) {
    e.stopPropagation();
    console.log(this.recipe);
    this.trigger.openMenu();
  }

}
