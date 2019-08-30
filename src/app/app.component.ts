import { Component , AfterViewInit ,ViewChild, OnInit} from '@angular/core';
import { Cell, CellList, HDTableComponent } from './hd-table/hd-table.component';
import {RubberTable} from 'rubber-table';
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


  @ViewChild(RubberTable , {static: false , read:false}  ) HDTable;

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
          // in the first argumeant we passed the column Id Name
          //and in the second argument we put the old values in the table in case there are any
          //<strong> Note Json props have the same name as the defined columns in the previous step </strong>
          this.HDTable.createTable("Id",  [{
            "Id" : "1",
             "FinalProduct": "Oil Emulsion Anti Foam",
             "ProductCapacity": "130",
             "ProductCapacityUnit": "98",
             "ProductCode": "AF420"
           },
           {
             "Id" : "2",
             "FinalProduct": "toy",
             "ProductCapacity": "2",
             "ProductCapacityUnit": "2",
             "ProductCode": "tt32"
           }] );


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
 //  the first pram is the column name (used as jsoon prop key )  by defult tag will be input & type will be text
    this.HDTable.addColumn("FinalProduct"  );
     // specify the column tag and input type
    this.HDTable.addColumn("ProductCode", this.HDTable.tags.input, this.HDTable.inputTypes.text);
    this.HDTable.addColumn("ProductCapacityUnit" , this.HDTable.tags.select , "" , [{key: "ton" ,value: "10" } , {key: "Kig" ,  value:20 }]  , "key" , "value" );
    this.HDTable.addColumn("ProductCapacity ",  this.HDTable.tags.input, this.HDTable.inputTypes.number );  // #D Coumn name and type and input format

     // in select tag we have to pass the lookups values for the in the column definition in the 4th column and key & value in 5th & 6th

   // for the primary key (Ids) column: add the hidden type in case if u want to hide the column
   this.HDTable.addColumn("Id" , this.HDTable.tags.input ,this.HDTable.inputTypes.hidden);

    //  let cell  = new Cell( "ProductCapacityUnit", "select", "", "");
    //  cell.list=[new CellList(" ton " , "2" ) ,  new CellList(" kig " , "3" ) ]
    //   this.rowStructueCells.push(new Cell( "FinalProduct", "input", "", ""));
    //   this.rowStructueCells.push(new Cell( "ProductCapacity", "input", "", ""));
    //   this.rowStructueCells.push(cell);
    //   this.rowStructueCells.push(new Cell( "ProductCode", "input", "", ""));
  }

  onCreate($event) {
    $event["Status"] = "CREATE";  // add flage to distinguish the action
   //  this.productsResult.push($event)
  }
  onDelete($event) {
    $event["Status"] = "DELETE";
 ///  this.productsResult.push($event)
  }
  onUpdate($event) {
    $event["Status"] = "UPDATE";
 //     this.productsResult.push($event)
}

}
