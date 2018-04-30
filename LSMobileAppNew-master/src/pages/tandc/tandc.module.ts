import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TandcPage } from './tandc';

@NgModule({
  declarations: [
    TandcPage,
  ],
  imports: [
    IonicPageModule.forChild(TandcPage),
  ],
  exports: [
    TandcPage
  ]
})
export class TandcPageModule {}
