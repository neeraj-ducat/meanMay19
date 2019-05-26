import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import {NgxWebstorageModule} from 'ngx-webstorage';
import { UpdateComponent } from './update/update.component';
// Array of application routes is defined.
const productRoutes : Route[] = [
  {path: '', redirectTo: 'newProduct', pathMatch: 'full'},
  {path: 'newProduct', component: AddComponent},
  {path: 'viewProducts', component: ViewComponent},
  {path: 'editProduct', component: UpdateComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
    RouterModule.forRoot(productRoutes),
    NgxWebstorageModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
