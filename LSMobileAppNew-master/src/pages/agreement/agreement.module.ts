import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgreementPage } from './agreement';
import { SyndicateService } from "../../providers/syndicate-service";
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AgreementPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(AgreementPage),
  ],
  exports: [
    AgreementPage
  ],
  providers:[SyndicateService]
})
export class AgreementPageModule {}
