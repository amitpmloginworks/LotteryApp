import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSyndicatePage } from './new-syndicate';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    NewSyndicatePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(NewSyndicatePage),
  ],
  exports: [
    NewSyndicatePage
  ]
})
export class NewSyndicatePageModule {}
