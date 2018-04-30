import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyndicateCreatedModalPage } from './syndicate-created-modal';

@NgModule({
  declarations: [
    SyndicateCreatedModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SyndicateCreatedModalPage),
  ],
  exports: [
    SyndicateCreatedModalPage
  ]

})
export class SyndicateCreatedModalPageModule {}
