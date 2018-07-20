import { Component, OnInit } from "@angular/core";
import { DataSource } from "@angular/cdk/collections";
import { Observable, of } from "rxjs";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

@Component({
  selector: "app-tree",
  templateUrl: "./tree.component.html",
  styleUrls: ["./tree.component.scss"],
  animations: [
    trigger("detailExpand", [
      state(
        "collapsed",
        style({ height: "0px", minHeight: "0", visibility: "hidden" })
      ),
      state("expanded", style({ height: "*", visibility: "visible" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})
export class TreeComponent implements OnInit {
  displayedColumns = ["position", "name", "weight"];
  dataSource = new ExampleDataSource();
  expandedElement: any;
  isExpansionDetailRow = (i: number, row: Object) =>
    row.hasOwnProperty("detailRow")

  constructor() {}
  ngOnInit() {}
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  expand:string;
}

const data: Element[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H", expand:"e"},
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He", expand:"e" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" , expand:"e"},
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be", expand:"e" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B", expand:"e" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C", expand:"e" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N", expand:"e" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" , expand:"e"},
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" , expand:"e"},
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne", expand:"e" },
  { position: 11, name: "Sodium", weight: 22.9897, symbol: "Na", expand:"e" },
  { position: 12, name: "Magnesium", weight: 24.305, symbol: "Mg", expand:"e" },
  { position: 13, name: "Aluminum", weight: 26.9815, symbol: "Al", expand:"e" },
  { position: 14, name: "Silicon", weight: 28.0855, symbol: "Si", expand:"e" },
  { position: 15, name: "Phosphorus", weight: 30.9738, symbol: "P" , expand:"e"},
  { position: 16, name: "Sulfur", weight: 32.065, symbol: "S", expand:"e" },
  { position: 17, name: "Chlorine", weight: 35.453, symbol: "Cl", expand:"e" },
  { position: 18, name: "Argon", weight: 39.948, symbol: "Ar" , expand:"e"},
  { position: 19, name: "Potassium", weight: 39.0983, symbol: "K" , expand:"e" },
  { position: 20, name: "Calcium", weight: 40.078, symbol: "Ca", expand:"e" }
];

/**
 * Data source to provide what data should be rendered in the table. The observable provided
 * in connect should emit exactly the data that should be rendered by the table. If the data is
 * altered, the observable should emit that new set of data on the stream. In our case here,
 * we return a stream that contains only one set of data that doesn"t change.
 */
export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Element[]> {
    const rows = [];
    data.forEach(element => rows.push(element, { detailRow: true, element }));
    console.log(rows);
    return of(rows);
  }

  disconnect() {}
}
