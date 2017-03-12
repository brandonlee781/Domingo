import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFireModule } from 'angularfire2';
import 'hammerjs';

import { routing } from './app.routes';

import { RecipeService } from './Services/recipe.service';
import { ListStateService } from './Services/list-state.service';
import { DialogsService } from './Services/dialogs.service';

export const firebaseConfig = {
    apiKey: "AIzaSyC4P9384NMz23zahQbuuQq1Q87R2rKRfBo",
    authDomain: "domingo-8eb88.firebaseapp.com",
    databaseURL: "https://domingo-8eb88.firebaseio.com",
    storageBucket: "domingo-8eb88.appspot.com",
    messagingSenderId: "743458710516"
  };

import { AppComponent } from './app.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { RecipeListComponent } from './Components/recipe-list/recipe-list.component';
import { RecipeThumbComponent } from './Components/recipe-thumb/recipe-thumb.component';
import { RecipeDetailComponent } from './Components/recipe-detail/recipe-detail.component';
import { FabComponent } from './Components/fab/fab.component';
import { RecipeEditComponent } from './Components/recipe-edit/recipe-edit.component';
import { RecipeMenuComponent } from './Components/recipe-menu/recipe-menu.component';
import { ConfirmDialogComponent } from './Components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    RecipeListComponent,
    RecipeThumbComponent,
    RecipeDetailComponent,
    FabComponent,
    RecipeEditComponent,
    RecipeMenuComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    RecipeService,
    ListStateService,
    DialogsService
    ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
