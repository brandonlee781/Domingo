import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeListComponent } from './Components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './Components/recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: '', component: RecipeListComponent},
  { path: 'recipe/:id', component: RecipeDetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
