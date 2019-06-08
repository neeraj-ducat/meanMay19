import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AdminGuard]},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
