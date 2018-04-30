import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateSyndicatePage } from './create-syndicate';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    CreateSyndicatePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CreateSyndicatePage),
  ],
  exports: [
    CreateSyndicatePage
  ]
})
export class CreateSyndicatePageModule {}
