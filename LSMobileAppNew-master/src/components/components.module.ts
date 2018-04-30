import { NgModule } from '@angular/core';
import { CusHeaderComponent } from "../components/cus-header/cus-header"
import { IonicModule } from 'ionic-angular'
import { NewArrowHeaderComponent } from './new-arrow-header/new-arrow-header';
import { SyndCusHeader1Component } from './synd-cus-header1/synd-cus-header1';
import { SyndCusHeader2Component } from './synd-cus-header2/synd-cus-header2';
import { ProgressBarComponent } from './progress-bar/progress-bar';
import { PopupConfirmPaymentComponent } from "./popup-confirm-payment/popup-confirm-payment";


@NgModule({
    declarations: [
        CusHeaderComponent,
        NewArrowHeaderComponent,
        SyndCusHeader1Component,
        SyndCusHeader2Component,
        PopupConfirmPaymentComponent,
        ProgressBarComponent
  


    ],
    exports: [
        CusHeaderComponent,
        NewArrowHeaderComponent,
        SyndCusHeader1Component,
        SyndCusHeader2Component,
        PopupConfirmPaymentComponent,
    
        ProgressBarComponent
    ],
    imports: [IonicModule]
})
export class ComponentsModule {

}