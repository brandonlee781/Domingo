import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { RecipeListComponent } from './Components/recipe-list/recipe-list.component';
import { RecipeThumbComponent } from './Components/recipe-thumb/recipe-thumb.component';
import { RecipeDetailComponent } from './Components/recipe-detail/recipe-detail.component';

import { RecipeService } from './Services/recipe.service';
import { FabComponent } from './Components/fab/fab.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RecipeListComponent,
    RecipeThumbComponent,
    RecipeDetailComponent,
    FabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
