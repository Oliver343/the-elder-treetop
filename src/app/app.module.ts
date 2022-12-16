import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { PassVariableComponent } from './body/pass-variable/pass-variable.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { QuickComponent } from './admin/quick/quick.component';
import { TableComponent } from './table/table.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    PassVariableComponent,
    QuickComponent,
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, NgxDatatableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
