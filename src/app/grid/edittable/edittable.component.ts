import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edittable',
  templateUrl: './edittable.component.html',
  styleUrls: ['./edittable.component.scss']
})
export class EdittableComponent implements OnInit {
  @Input() tableData: Object;
  @Input() buttonConfig: any;
  @Output() editableDataValue = new EventEmitter();

  isEditable = false;
  constructor() {
    console.log('buttonConfig', this.buttonConfig);
  }

  ngOnInit() {}

  hanleClick(event, data) {
    this.editableDataValue.emit(this.tableData);
  }
  onEdit(event) {
    console.log('event', event, 'data', this.tableData);
    console.log('buttonConfig', this.buttonConfig);
    this.tableData['editing'] = true;
    this.isEditable = true;
    this.editableDataValue.emit(this.tableData);
  }
  onDelete(event) {
    console.log('event', event, 'data', this.tableData);
    this.editableDataValue.emit(this.tableData);
  }
  onSave(event) {
    console.log('event', event, 'data', this.tableData);
    this.tableData['editing'] = false;
    this.isEditable = false;
    this.editableDataValue.emit(this.tableData);
  }
  onCancel(event) {
    console.log('event', event, 'data', this.tableData);
    this.tableData['editing'] = false;
    this.isEditable = false;
    this.editableDataValue.emit(this.tableData);
  }
}
