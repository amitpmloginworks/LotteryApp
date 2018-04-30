import { NgModule } from '@angular/core';
import { FilterPipe } from './filter/filter';
import { CapitalizeFirstPipe } from './capitalize-first/capitalize-first';
import { ValuePipe } from './value/value';
import { TimeDifferencePipe } from './time-difference/time-difference';
import { TextManipulatePipe } from './text-manipulate/text-manipulate';
import { lotsPipe } from './selected-lottries/selected-lottries';
import { DayPipe } from './day/day';
import { ContactSelectedPipe } from './contact-selected/contact-selected';
import { DateLeftPipe } from './date-left/date-left';
import { FilterBadge } from './filterBadge/filterBadge';
import { IonicModule } from 'ionic-angular'
import { KeysPipe } from './keys/keys';
import { filterBadgeEarned } from './filterEarnedBadge/filterEarnedBadge';
import { productOfferNullfilter } from './productOfferNullfilter/productOfferNullfilter';

@NgModule({
    declarations: [
        FilterPipe,
        FilterBadge,
        CapitalizeFirstPipe,
        ValuePipe,
        TimeDifferencePipe,
        TextManipulatePipe,
        lotsPipe,
        FilterPipe,
        DayPipe,
        ContactSelectedPipe,
        DateLeftPipe,
        KeysPipe,
        filterBadgeEarned,
        productOfferNullfilter
    ],

    exports: [
        FilterPipe,
        FilterBadge,
        CapitalizeFirstPipe,
        ValuePipe,
        TimeDifferencePipe,
        TextManipulatePipe,
        lotsPipe,
        FilterPipe,
        DayPipe,
        ContactSelectedPipe,
        DateLeftPipe,
        KeysPipe,
        filterBadgeEarned,
        productOfferNullfilter
    ],
    imports: [IonicModule],
})
export class PipesModule { }
