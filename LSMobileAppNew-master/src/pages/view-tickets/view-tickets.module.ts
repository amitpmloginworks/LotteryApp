import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewTicketsPage } from './view-tickets';

@NgModule({
  declarations: [
    ViewTicketsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewTicketsPage),
  ],
  exports: [
    ViewTicketsPage
  ]
})
export class ViewTicketsPageModule {}
