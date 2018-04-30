import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySyndicatePage } from './my-syndicate';
import { ComponentsModule } from "../../components/components.module";
import { Badge } from "@ionic-native/badge";
import { SyndicateService } from "../../providers/syndicate-service";



@NgModule({
  declarations: [
    MySyndicatePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(MySyndicatePage),
  ],
  
   providers:[Badge,SyndicateService]
})
export class MySyndicatePageModule {}
