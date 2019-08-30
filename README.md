# Rubber Table 

The sources for this package are in the main Angular Material repo. Please file issues and pull requests against that repo. [HD Rubber Table ](https://github.com/HishamAbonjim/hd-table) version 1.0.3.


## Installation

The library is available as npm package, so all you need to do is to run the following command:

```typescript
npm install rubber-table 
```
This command will create a record in your `package.json` file and install the package into the npm modules folder.
---
## Setup Example

First thing you need to do is to import the rubber-table directives into your component.

```typescript

import {RubberTable} from 'rubber-table';

```

Then register it by adding to the list of directives of your module:

```typescript
// ...

@NgModule({
  imports: [
    // ...
    
   RubberTable,
    
    // ...
  ],
  declarations: [ ... ]
})
// ...
```
---
## Usage 
 <strong> here are the steps: :D </steong>
* Import RubberTable in the desired  component 
```typescript
import {RubberTableComponent} from 'rubber-table'; 
```

* Import AfterViewInit and ViewChild  from  '@angular/core' 

```typescript
import {  AfterViewInit ,ViewChild} from '@angular/core';

```

* implement AfterViewInit
```typescript
export class AppComponent implements  AfterViewInit {
```
* define RubberTable in component 

```typescript
 @ViewChild(RubberTable , {static: false , read:false}  ) HDTable;
```
* adding table headers  

```typescript
ngAfterViewInit(){ 
   this.HDTable.addHeaders( [ //#D headers
        "Final Product",
        "Product Capacity",
        "Product CapacityUnit",
        "Product Code"
      ]); 

} 
```

* adding table skeleton in ngAfterViewInit() 
```typescript
ngAfterViewInit(){ 
 //  the first pram is the column name (used as json prop key )  by defult tag will be input & type will be text 
    this.HDTable.addColumn("FinalProduct"  );
     // specify the column tag and input type 
    this.HDTable.addColumn("ProductCode", this.HDTable.tags.input, this.HDTable.inputTypes.text);
    this.HDTable.addColumn("ProductCapacity ",  this.HDTable.tags.input, this.HDTable.inputTypes.number );  
     
     // in select tag we have to pass the lookups values for the in the column definition in the 4th column and key & value in 5th & 6th   
    this.HDTable.addColumn("ProductCapacityUnit" , this.HDTable.tags.select , "" , [{key: "ton" ,value: "10" } , {key: "Kig" ,  value:20 }]  , "key" , "value" );

   // for the primary key (Ids) column: add the hidden type in case if u want to hide the column 
   this.HDTable.addColumn("Id" , this.HDTable.tags.input ,this.HDTable.inputTypes.hidden); 
} 
```
* finaly  the template 
```typescript
// in the template add the event emitters (createdElement) , (updatedElement) & (deletedElement)
<hd-rubber-table
(deletedElement)="onDelete($event)"
(createdElement)="onCreate($event)"
(updatedElement)="onUpdate($event)"> </hd-rubber-table>
```

* last piece in the component 
```typescript 
// from the event emitters  (createdElement) , (updatedElement) & (deletedElement) you will reseive the change object or the added object 
// example: 
  onCreate($event) {
    $event["Status"] = "CREATE";  // add flage to distinguish the action   
    this.productsResult.push($event)
  }
  onDelete($event) {
    $event["Status"] = "DELETE";
   this.productsResult.push($event)
  }
  onUpdate($event) {
    $event["Status"] = "UPDATE";
     this.productsResult.push($event)
}

```

--- 
---
# Features 
## Supported Tags
   * input 
   * select 
## Supported input types 
* text
* number
* password
* date
* email
* month
* range
* search
* tel
* time
* url
* week
* hidden 

## CSS classes placeholders
you can change any element styles using the already defined classes in the html template
<strong> classes:  </strong> 
 * hd-table-div-container
 * hd-table 
 * hd-table-header
 * hd-table-header-tr 
 * hd-table-header-th
 * hd-table-tbody
 * hd-table-tbody-row
 * hd-table-tbody-td
 * hd-table-select
 * hd-table-select-option
 * hd-table-input
 * hd-table-btn-edit
 * hd-table-btn-delete
 * hd-table-btn-add
 * hd-table-btn-save


 --- 
###### toti toti :D  
 
