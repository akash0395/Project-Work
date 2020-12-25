import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import {AuthGuard} from './auth.guard'
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},   
  {path: '', redirectTo:'home', pathMatch:'full'},
  
  {path: 'login', component: LoginComponent},   
  {path: 'register', component: RegisterComponent},
  {path:'admin', component: AdminComponent,
     canActivate:[AuthGuard], 
     data:{role: 'ROLE_ADMIN'}
    },
  {
    path: 'user',
    component: UserComponent,
    canActivate:[AuthGuard],
    data: {role: 'ROLE_USER'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
