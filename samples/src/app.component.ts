import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  @ViewChild('adaptive')
  public grid: GridComponent;
  public data: object[];
  public editSettings: Object;
  public toolbar: string[];
  public orderidrules: Object;
  public customeridrules: Object;
  public filterSettings: Object;
  public menuFilter: Object;
  public checkboxFilter: Object;

  ngOnInit(): void {
    this.data = data;
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Dialog',
    };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    this.orderidrules = { required: true, number: true };
    this.customeridrules = { required: true };
    this.filterSettings = { type: 'Excel' };
    this.menuFilter = {
      type: 'Menu',
    };
    this.checkboxFilter = {
      type: 'CheckBox',
    };
  }

  public onLoad(): void {}
}
