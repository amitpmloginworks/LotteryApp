import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { HomePageModule } from '../home/home.module'

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    HomePageModule,

    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule { }
