import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { Label1Component } from './main/label1.component';
import { Label2Component } from './main/label2.component';
import { Label3Component } from './main/label3.component';
import { Label4Component } from './main/label4.component';
import { TableComponent } from './table/table.component';
import { Ng2TableModule } from 'ng2-table/ng2-table';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    Label1Component,
    Label2Component,
    Label3Component,
    Label4Component,
    TableComponent
  ],
  imports: [
    BrowserModule,
    Ng2TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
