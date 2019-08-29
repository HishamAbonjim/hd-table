import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: "inputs-table",
  templateUrl: "./inputs-table.component.html",
  styleUrls: ["./inputs-table.component.scss"]
})
export class InputsTableComponent implements OnInit {
  constructor() {}
  onChange: EventEmitter<any> = new EventEmitter();

  tableSettings: TableSettings;
  rowsOnEdit = [];
  @Input() headers: any[];

  //  = [
  //   "FinalProduct",
  //   "ProductCapacity",
  //   "ProductCapacityUnit",
  //   "ProductCode"
  // ];

  @Input() data: any[];

  //[ {
  //   "FinalProduct": "Oil Emulsion Anti Foam",
  //   "ProductCapacity": "130",
  //   "ProductCapacityUnit": "98",
  //   "ProductCode": "AF420"
  // },
  // {
  //   "FinalProduct": "w",
  //   "ProductCapacity": "w",
  //   "ProductCapacityUnit": "w",
  //   "ProductCode": "w"
  // }];
  @Output() deletedElement = new EventEmitter<any>();
  @Output() createdElement = new EventEmitter<any>();
  @Output() updatedElement = new EventEmitter<any>();
  rows = [];
  //  rowStructueCells :Cell[]=[];
  @Input() rowStructureCells: Cell[] = [];
  @Input() key: string = "";
  ngOnInit() {
    this.createTable();
  }



  createTable(key: string = "", data: any[] = null) {
    this.createTableStructure();
    if (this.data && this.data.length > 0)
      this.data.forEach(e => {
        let Cells = _.cloneDeep(this.rowStructureCells);
        Cells.forEach(c => {
          c.value = e[c.name];
          c.disabled = true;
          if (c.name === this.key) c.key = true;
        });
        this.rows.push(Cells);
      });
    // this.rowCells = [] ;
    //this.rows = this.rows.concat()
    // this.headers = headers;
    // this.key = key;
    // this.rowCells.push(new Cell( "FinalProduct", "input", "", ""));
    // this.rowCells.push(new Cell( "ProductCapacity", "input", "", ""));
    // this.rowCells.push(new Cell( "ProductCapacityUnit", "input", "", ""));
    // this.rowCells.push(new Cell( "ProductCode", "input", "", ""));

    // this.rows.push(this.rowCells);
  }

    seedTableData(data) {
    this.data = data;
    if (this.data && this.data.length > 0)
      this.data.forEach(e => {
        let Cells = _.cloneDeep(this.rowStructureCells);
        Cells.forEach(c => {
          c.value = e[c.name];
          c.disabled = true;
          if (c.name === this.key) c.key = true;
        });
        this.rows.push(Cells);
      });
  }
  onValueChange() {
    this.onChange.emit("test");
  }
  createTableStructure() {
    //  let cell  = new Cell( "ProductCapacityUnit", "select", "", "");
    //  cell.list=[new CellList(" ton " , "2" ) ,  new CellList(" kig " , "3" ) ]
    //   this.rowStructueCells.push(new Cell( "FinalProduct", "input", "", ""));
    //   this.rowStructueCells.push(new Cell( "ProductCapacity", "input", "", ""));
    //   this.rowStructueCells.push(cell);
    //   this.rowStructueCells.push(new Cell( "ProductCode", "input", "", ""));

    this.rows.unshift(this.rowStructureCells);
  }
  onEdit(index) {
    this.rows[index].forEach(c => {
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

    // this.createTable();
    /// emmit the holl value to be saved again ,
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
    /// emmit the holl value to be saved again ,
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
