import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './Components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Components/recipe-detail/recipe-detail.component';
import { EditRecipeComponent } from './Components/edit-recipe/edit-recipe.component';

export const routes: Routes = [
  { path: '', component: RecipeListComponent},
  { path: 'recipe/:id', component: RecipeDetailComponent },
  { path: 'new', component: EditRecipeComponent },
  { path: 'edit/:id', component: EditRecipeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
