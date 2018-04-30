import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourOffersPage } from './your-offers';


@NgModule({
  declarations: [
    YourOffersPage,
  ],
  imports: [

    IonicPageModule.forChild(YourOffersPage),
  ]
})
export class YourOffersPageModule { }
