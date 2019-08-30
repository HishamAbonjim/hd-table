import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RubberTable } from './rubber-table';



@NgModule({
  declarations: [RubberTable],
  imports: [BrowserModule,FormsModule
  ],
  exports: [RubberTable]
})
export class RubberTableModule { }
