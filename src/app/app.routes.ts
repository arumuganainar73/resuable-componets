import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TableComponent } from './table/table.component';
import { TreetableComponent } from './grid/treetable/treetable.component';
import { TreeComponent } from './tree/tree.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "table", component: TableComponent },
  { path: "treetable", component: TreetableComponent },
  { path: "tree", component: TreeComponent }

];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false
    })
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
