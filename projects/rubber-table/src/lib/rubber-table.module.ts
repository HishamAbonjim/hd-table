import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RubberTableComponent } from './rubber-table.component';



@NgModule({
  declarations: [RubberTableComponent],
  imports: [BrowserModule,FormsModule
  ],
  exports: [RubberTableComponent]
})
export class RubberTableModule { }
