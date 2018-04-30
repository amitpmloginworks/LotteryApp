import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SyndicatesPage } from './syndicates';
import { ComponentsModule } from "../../components/components.module";
import { Badge } from "@ionic-native/badge";


@NgModule({
  declarations: [
    SyndicatesPage,
  ],
  imports: [
      ComponentsModule,
    IonicPageModule.forChild(SyndicatesPage),
  ],
   exports:[SyndicatesPage],
   providers:[Badge],
  
})
export class SyndicatesPageModule {}
