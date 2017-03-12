import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { RecipeService } from '../../Services/recipe.service';
import { DialogsService } from '../../Services/dialogs.service';

@Component({
  selector: 'dmg-recipe-menu',
  templateUrl: './recipe-menu.component.html',
  styleUrls: ['./recipe-menu.component.scss']
})
export class RecipeMenuComponent implements OnInit {
  @Input() id: string;

  constructor(private dialogsService: DialogsService, private recipeService: RecipeService) { }

  ngOnInit() {
  }

  deleteRecipe() {
    this.dialogsService
      .confirm('Delete Recipe', 'Are you sure you want to delete this recipe?')
      .subscribe(res => {
        if (res) this.recipeService.deleteRecipe(this.id);
      });
  }
}
