import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './Components/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './Components/recipe-edit/recipe-edit.component';

export const routes: Routes = [
  { path: '', component: RecipeListComponent},
  { path: 'new', component: RecipeEditComponent },
  { path: 'edit/:id', component: RecipeEditComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
