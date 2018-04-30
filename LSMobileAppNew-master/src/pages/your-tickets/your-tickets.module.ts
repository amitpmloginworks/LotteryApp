import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourTicketsPage } from './your-tickets';
import { ComponentsModule } from "../../components/components.module";
import { SyndicateService } from "../../providers/syndicate-service";

@NgModule({
  declarations: [
    YourTicketsPage,
  ],
  imports: [
       ComponentsModule,
    IonicPageModule.forChild(YourTicketsPage),
  ],
  exports: [
    YourTicketsPage
  ],
  providers:[SyndicateService],
})
export class YourTicketsPageModule {}
