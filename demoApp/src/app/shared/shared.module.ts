import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AlertModule } from 'ngx-alerts';
@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule, FormsModule, BrowserAnimationsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'})
  ],
  exports: [FormsModule,LogoutComponent,
  BrowserAnimationsModule, AlertModule]
})
export class SharedModule { }
