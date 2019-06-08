import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
@NgModule({
  declarations: [LogoutComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [FormsModule,LogoutComponent]
})
export class SharedModule { }
