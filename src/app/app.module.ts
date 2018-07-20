import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app.routes';
import { MyNavComponent } from './my-nav/my-nav.component';
import { UserComponent } from './user/user.component';
import { TableComponent } from './table/table.component';
import { TreetableComponent } from './grid/treetable/treetable.component';
import { EdittableComponent } from './grid/edittable/edittable.component';
import { TreeComponent } from './tree/tree.component';
import { SafeHtmlPipe } from './pipe/safe-html.pipe';
import { Ng6CheckboxDirective } from './grid/directives/ng6-checkbox.directive';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MyNavComponent,
    UserComponent,
    TableComponent,
    TreetableComponent,
    EdittableComponent,
    TreeComponent,
    SafeHtmlPipe,
    Ng6CheckboxDirective
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    InfiniteScrollModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
