import { Component, OnInit, EventEmitter, Input, Output, ApplicationRef, ChangeDetectorRef } from "@angular/core";
import * as _ from "lodash";


@Component({
  selector: "hd-table",
  templateUrl: "./hd-table.component.html",
  styleUrls: ["./hd-table.component.scss"]
})
export class HDTableComponent   {

  tags = Tags;
  inputTypes = InputTypes;


  tableSettings: TableSettings;
  rowsOnEdit = [];
  constructor(   private ref:ChangeDetectorRef){

  }

  headers ;
  addHeaders(headers: string[]) {
    this.headers =  headers ;
    this.ref.detectChanges();
  }
  get Hrades():string [] {
 return this.headers;
  }

  rowStructureCells: Cell[] = [];
  addColumn(
    columnName: string,
    tag: string = this.tags.input,
    inputTextType: string =this.inputTypes.text,
   //  key: boolean = false,
    keyValuePairLookups: [] =[]  ,
    pairKey: string ,
    pairValue: string
  ) {

   if(tag ==='select')
    {
     let lookups =[];
      for ( let lkp  in  keyValuePairLookups  ){
       lookups.push( new CellList(keyValuePairLookups[lkp][pairKey] , keyValuePairLookups[lkp][pairValue]));
      }
      this.rowStructureCells.push(new Cell(columnName,tag ,inputTextType , lookups ,false))
      return ;
    }
    this.rowStructureCells.push(new Cell(columnName,tag ,inputTextType , [] ,false))
  }

  @Output() deletedElement = new EventEmitter<any>();
  @Output() createdElement = new EventEmitter<any>();
  @Output() updatedElement = new EventEmitter<any>();
  rows = [];
  data ;




  createTable(key: string = "", data: any[] = null) {
    this.data   =data;
    this.createTableStructure();
    if ( this.data &&  this.data.length > 0)
    this.data.forEach(e => {
        let Cells = _.cloneDeep(this.rowStructureCells);
        Cells.forEach(c => {
          c.value = e[c.name.trim()];
          c.disabled = true;
          if (c.name === key) c.key = true;
        });
        this.rows.push(Cells);
      });

  }

  createTableStructure() {
     this.rows.unshift(this.rowStructureCells);
  }
  onEdit(index) {
    this.rows[index].forEach(c =>
      {
        if (c.key )
        return ;
      c.disabled = false;
      c.value = "";
      c.editMode = true;
    });
    this.rowsOnEdit.push(index);
  }
  onSave(index) {
    this.updatedElement.emit(this.getTheTargetedJson(index));
    this.rows[index].forEach(c => {
      c.disabled = true;
      c.editMode = false;
    });
    this.rowsOnEdit = this.rowsOnEdit.filter(e => {
      return e !== index;
    });

  }

  onAdd(index) {
    this.createdElement.emit(this.getTheTargetedJson(index));
    this.rows[index].forEach(c => {
      c.disabled = true;
      c.editMode = false;
    });
    this.rowsOnEdit = this.rowsOnEdit.map(e => {
      return e + 1;
    });
    let newRowStructure = _.cloneDeep(this.rowStructureCells);
    newRowStructure.forEach(c => {
      c.value = "";
      c.disabled = false;
    });
    this.rows.unshift(newRowStructure);
  }
  onDelete(index) {
    this.deletedElement.emit(this.getTheTargetedJson(index));
    this.rows.splice(index, 1);
  }
  getTheTargetedJson(index): any {
    let targetedRow = {};
    let row: Cell[] = this.rows[index];
    row.forEach(c => (targetedRow[c.name] = c.value));
    console.log(JSON.stringify(targetedRow));
    return targetedRow;
  }
}

export class Cell {
  // key ;
  //  name;
  // tag;
  //  type;
  // value;
  // list:CellList[] = [];
  disabled: Boolean = true;
  // editMode:Boolean = false;
  // htmlProp =[] ; TODO: in future
  // requierd ;
  //  key:Boolean ;
  public value: string = "";
  constructor(
    public name: string,
    public tag: string = "input",
    public type: string,
    public list: CellList[],
    public key: Boolean = false,
    public requierd: string = "requierd",
    editMode: Boolean = false
  ) {
    if (!this.value)  this.disabled = false;
  }
}

export class TableSettings {
  edit: Boolean = true;
  editClass: string;
  editText: string;
  delete: Boolean = true;
  deleteClass: string;
  deleteText: string;
  add: Boolean = true;
  addClass: string;
  addText: string;
}

export class CellList {
  constructor(public value: string = "", public code: string = "") {}
}

export const Tags =  {
  input: 'input' ,
  select : 'select'
}
export const InputTypes = {
  text:'text',
  number:'number' ,
  password:'password',
  date:'date',
  email:'email',
  month:'month',
  range:'range',
  search:'search',
  tel:'tel',
  time:'time',
  url:'url',
  week:'week',
  hidden:"hidden"
}

