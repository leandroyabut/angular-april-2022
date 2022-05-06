import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {LoginComponent} from './pages/login/login.component';
import {PersonalInfoComponent} from './pages/sign-up/personal-info/personal-info.component';
import {UserInfoComponent} from './pages/sign-up/user-info/user-info.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "sign-up",
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "personal-info"
      },
      {
        path: "personal-info",
        component: PersonalInfoComponent
      },
      {
        path: "user-info",
        component: UserInfoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
