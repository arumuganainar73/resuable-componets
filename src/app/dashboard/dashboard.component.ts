import { Component, OnInit, ViewChild } from "@angular/core";
import { Options } from "../app.interface";
import { DataSource } from "@angular/cdk/collections";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  @ViewChild("gridTable") gridTable;

  checked = false;
  indeterminate = false;
  labelPosition = "after";
  disabled = false;
  options: Options[] = [
    { value: "option-1", viewValue: "Option-1" },
    { value: "option-1", viewValue: "Option-2" },
    { value: "option-2", viewValue: "Option-3" }
  ];
  postData = [
    { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H", fav: "Yes" },
    { position: 2, name: "Helium", weight: 4.0026, symbol: "He", fav: ""  },
    { position: 3, name: "Lithium", weight: 6.941, symbol: "Li", fav: "no"  },
    { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be", fav: "no"  },
    { position: 5, name: "Boron", weight: 10.811, symbol: "B", fav: "Yes"  },
    { position: 6, name: "Carbon", weight: 12.0107, symbol: "C", fav: "no"  },
    { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N", fav: "Yes"  },
    { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O", fav: ""  },
    { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F", fav: ""  },
    { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne", fav: ""  },
    { position: 11, name: "Sodium", weight: 22.9897, symbol: "Na", fav: ""  },
    { position: 12, name: "Magnesium", weight: 24.305, symbol: "Mg", fav: "Yes"  },
    { position: 13, name: "Aluminum", weight: 26.9815, symbol: "Al", fav: ""  },
    { position: 14, name: "Silicon", weight: 28.0855, symbol: "Si", fav: ""  },
    { position: 15, name: "Phosphorus", weight: 30.9738, symbol: "P", fav: "no"  },
    { position: 16, name: "Sulfur", weight: 32.065, symbol: "S", fav: "no"  },
    { position: 17, name: "Chlorine", weight: 35.453, symbol: "Cl", fav: "Yes"  },
    { position: 18, name: "Argon", weight: 39.948, symbol: "Ar", fav: ""  },
    { position: 19, name: "Potassium", weight: 39.0983, symbol: "K", fav: "no"  },
    { position: 20, name: "Calcium", weight: 40.078, symbol: "Ca", fav: ""  },
  ];
  tableConfig = {
    editable: true,
    filter: true,
    multiselect: true,
    rowSelect: true,
    pageNation: true,
    lazyLoading: true,
    editableRow: false,
    saveButtonInHeader: false,
    saveButtonInFooter: false,
    sortingDisable: false, //[ "position", "name", "weight", "symbol", "fav", "action"]
    headers: [
      {
        label: "Select",
        colData: "select"
      },
      {
        label: "No",
        colData: "position"
      },
      {
        label: "Name",
        colData: "name"
      },
      {
        label: "Weight",
        colData: "weight"
      },
      {
        label: "Symbol.",
        colData: "symbol"
      },
      {
        label: "Favorite",
        colData: "fav"
      }
      // ,{
      //   label:'Action',
      //   render: function(event, object) {
      //     console.log('event', event, 'data', object);

      //     const buildHtml = "<ng-container *ngFor='let button of loadTableData.button'>\n\
      //     <button type='button' mat-raised-button (click)='button.click($event, element)'>/n\
      //     {{button.label}}</button></ng-container>";

      //     return buildHtml;
      //   }
      // }
    ],
    buttonPlacement: "", //"header" or "footer" or "row"
    button: [
      {
        label: "Save",
        class: "primary",
        click: function(event, object) {
          console.log("event", event, "data", object);
        },
        mouseenter: function(event, object) {
          console.log("event", event, "data", object);
        },
        event: {
          click: "click",
          mouseenter: "mouseenter"
        },
        disabled: false
      },
      {
        label: "Cancel",
        class: "secondary",
        click: function(event, object) {
          console.log("event", event, "data", object);
        },
        event: {
          click: "click"
         },
        disabled: false
      }
    ]
  };

  constructor() {}

  ngOnInit() {}

  handleTableEvents(event) {
    console.log("event", event);
  }
}
