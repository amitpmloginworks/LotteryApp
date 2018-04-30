import {Injectable, Pipe, PipeTransform} from '@angular/core';

/**
 * Generated class for the SelectedLottriesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
    name: 'lotselecetd',
    pure: false
})
  @Injectable()
export class lotsPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        return items.filter(item => item.selected);
    }
}
