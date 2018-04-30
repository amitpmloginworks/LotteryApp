import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageSyndicate2Page } from './manage-syndicate2';
import { leaveSyndicate } from "../../services/syndicate_leave.service";

@NgModule({
  declarations: [
    ManageSyndicate2Page,
  ],
  imports: [
    IonicPageModule.forChild(ManageSyndicate2Page),
  ],
  exports: [
    ManageSyndicate2Page
  ],
  providers:[leaveSyndicate],
})
export class ManageSyndicate2PageModule {}
