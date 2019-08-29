import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputsTableService {

   index: number = 0 ; 
   events= [] ;   
  constructor() { } 

 createInputTable(){ 
   this.events.push({'index': this.index++ ,  'event': new EventEmitter<any>() })  
 }
}
