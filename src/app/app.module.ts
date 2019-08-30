import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';



import {HDTableComponent } from './hd-table/hd-table.component';
import {RubberTable} from 'rubber-table';

@NgModule({
  declarations: [
    AppComponent ,

    HDTableComponent,
    RubberTable
  ],
  imports: [
    BrowserModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
