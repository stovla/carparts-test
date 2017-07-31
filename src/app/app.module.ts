import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { AddNewCarpartComponent } from './add-new-carpart/add-new-carpart.component';
import { PartDetailsComponent } from './part-details/part-details.component';
import { PartsListComponent } from './parts-list/parts-list.component';

// !!!!!!  change service location to '/services' folder  !!!!!!!
import { PartsDbService } from "./parts-db.service";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";

export const firebaseConfig = {
    apiKey: "AIzaSyCYRV9F4azm40tHG3R6LjobRGMUESIECMo",
    authDomain: "car-parts-app.firebaseapp.com",
    databaseURL: "https://car-parts-app.firebaseio.com",
    projectId: "car-parts-app",
    storageBucket: "car-parts-app.appspot.com",
    messagingSenderId: "961298362831"
  }

@NgModule({
  declarations: [
    AppComponent,
    AddNewCarpartComponent,
    PartDetailsComponent,
    PartsListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'add-new', component: AddNewCarpartComponent },
      { path: 'details/:id/:name', component: PartDetailsComponent }
      // { path: 'add-new', component: DetailsComponent }
    ]),
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [PartsDbService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
