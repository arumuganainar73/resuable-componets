import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  Output,
  EventEmitter,
  ViewChild
} from "@angular/core";
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { SelectionModel } from "@angular/cdk/collections";

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  fav: string;
  editing: boolean;
}

const ELEMENT_DATA: Element[] = [];

@Component({
  selector: "app-treetable",
  templateUrl: "./treetable.component.html",
  styleUrls: ["./treetable.component.scss"]
})
export class TreetableComponent implements OnInit, AfterViewInit {
  pageLength = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  @Input() loadTableData: any;
  @Input() apiData: any;
  @Output() tableDatas = new EventEmitter();

  isEditable = false;
  buttonConfig;
  displayedColumns;
  columnsToDisplay: string[];

  constructor() {}

  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  private paginator: MatPaginator;

  @ViewChild(MatPaginator)
  set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.matTableCofig();
  }
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    if (this.loadTableData["editable"]) {
      this.loadTableData["headers"].push({
        label: "Action",
        colData: "action"
      });
    }

    this.displayedColumns = this.loadTableData["headers"];
    this.buttonConfig = this.loadTableData["button"];
    this.columnsToDisplay = this.displayedColumns.map(c => c.colData);
    this.matTableCofig();
  }

  matTableCofig() {
    this.dataSource = new MatTableDataSource<Element>(this.apiData);
    this.selection = new SelectionModel<Element>(true, []);
    this.pageLength = this.apiData.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // ExampleDataSource defaults to lowercase matches
    this.dataSource["filter"] = filterValue;
  }
  onEdit(index, data) {
    console.log("index", index, "data", data);
    data.editing = true;
  }
  handleEditData(data) {
    console.log("editableTableData", data);
    this.tableDatas.emit(data);
  }
  /** Whether the number of selected elements matches the total number of rows. */

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  selectSingleRow(row, flag) {
    if (flag) {
      this.selection.clear();
    }
    row["editing"] = !row["editing"];
  }
  ngAfterViewInit() {
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      this.dataSource.data.forEach(row => {
        row["editing"] = !row["editing"];
      });
    } else {
      this.dataSource.data.forEach(row => {
        this.selection.select(row);
        row["editing"] = !row["editing"];
      });
    }
  }
}
