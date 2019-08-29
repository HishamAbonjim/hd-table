import { Component , AfterViewInit ,ViewChild, OnInit} from '@angular/core';
import { Cell, CellList, HDTableComponent } from './hd-table/hd-table.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  AfterViewInit {
  title = 'hd-table';
  //  product Table   // #D step 1  initiate Table
  rowStructureCells: Cell[] = []; // #D here is the structure for the columns heach column type and initial values will be here
   // you must map the column name for  example  "FinalProduct" the response contain this prop name   this.rowStructureCells.push(new Cell("FinalProduct", "input", "", []));
  // header  = [ //#D headers
  //   "Final Product",
  //   "Product Capacity",
  //   "Product CapacityUnit",
  //   "Product Code"
  // ];   //#D HEaders
  productKey = "Id"; //  #D primery key fot the rows
  products = []; // #D Table Data "Old data "
  // End Of Product Table


  @ViewChild(HDTableComponent , {static: false , read:false}  ) HDTable;

  ngAfterViewInit(){
     this.products =  [{
       "Id" : "1",
        "FinalProduct": "Oil Emulsion Anti Foam",
        "ProductCapacity": "130",
        "ProductCapacityUnit": "98",
        "ProductCode": "AF420"
      },
      {
        "Id" : "2",
        "FinalProduct": "w",
        "ProductCapacity": "2",
        "ProductCapacityUnit": "2",
        "ProductCode": "w"
      }];
      this.HDTable.addHeaders( [ //#D headers
        "Final Product",
        "Product Capacity",
        "Product CapacityUnit",
        "Product Code"
      ]);

          this.createProductsTable();// #D create table
          this.HDTable.createTable("Id",  this.products );


  }

  createProductsTable() {


    // let cell = new Cell(
    //   "ProductCapacityUnit",
    //   "select",
    //   "",
    // //   this.form5Service.productUnit as (CellList[]), //#D here it contain a list of lookups :D
    // [new CellList(" ton " , "2" ) ,  new CellList(" kig " , "3" ) ],
    // false
    // );

    this.HDTable.addColumn("FinalProduct", "input" ); // #D by defult type string
    this.HDTable.addColumn("ProductCapacity ", "input", "number" );  // #D Coumn name and type and input format

    this.HDTable.addColumn("ProductCapacityUnit" , "select" , "" , [{key: "ton" ,value: "10" } , {key: "Kig" ,  value:20 }]  , "key" , "value" );
    this.HDTable.addColumn("ProductCode", this.HDTable.tags.input, this.HDTable.inputTypes.input);
   //  this.rowStructureCells.push(new Cell("ProductCode", "input", "number", []));

   this.HDTable.addColumn("Id" , this.HDTable.tags.input ,this.HDTable.inputTypes.hidden);

    //  let cell  = new Cell( "ProductCapacityUnit", "select", "", "");
    //  cell.list=[new CellList(" ton " , "2" ) ,  new CellList(" kig " , "3" ) ]
    //   this.rowStructueCells.push(new Cell( "FinalProduct", "input", "", ""));
    //   this.rowStructueCells.push(new Cell( "ProductCapacity", "input", "", ""));
    //   this.rowStructueCells.push(cell);
    //   this.rowStructueCells.push(new Cell( "ProductCode", "input", "", ""));
  }

  onCreate($event) {
    debugger ;
  console.log("sss")
    $event["Status"] = "C";

    // this.input.ModonProducts.push($event)
  }
  onDelete($event) {
    $event["Status"] = "D";
  //  this.input.ModonProducts.push($event)
  }
  onUpdate($event) {
    $event["Status"] = "U";
    // this.input.ModonProducts.push($event)

}

}
