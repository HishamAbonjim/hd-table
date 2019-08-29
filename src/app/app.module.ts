import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { InputsTableComponent } from './inputs-table/inputs-table.component';

import {HDTableComponent } from './hd-table/hd-table.component';
import {RubberTableComponent} from 'rubber-table';

@NgModule({
  declarations: [
    AppComponent ,
    InputsTableComponent,
    HDTableComponent,
    RubberTableComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
