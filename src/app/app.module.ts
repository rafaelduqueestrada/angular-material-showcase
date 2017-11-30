import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import {AppComponent} from './app.component';
import {AppMaterialModule} from './app-material-module';
import {HomeComponent} from './core/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {OpenDialogExampleComponent} from './material/dialog/open-dialog-example.component';
import {DialogExampleComponent} from './material/dialog/dialog-example.component';
import {FormsModule} from '@angular/forms';
import { PagedTableComponent } from './material/paged-table/paged-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpenDialogExampleComponent,
    DialogExampleComponent,
    PagedTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  entryComponents: [ DialogExampleComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
