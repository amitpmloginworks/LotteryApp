import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckWinningsPage } from './check-winnings';
import { SyndicateService } from "../../providers/syndicate-service";

@NgModule({
  declarations: [
    CheckWinningsPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckWinningsPage),
  ],
  exports: [
    CheckWinningsPage
  ],
  providers:[SyndicateService],
})
export class CheckWinningsPageModule {}
