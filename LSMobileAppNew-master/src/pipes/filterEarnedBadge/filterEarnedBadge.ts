import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "filterBadgeEarned",
    pure: false
})
@Injectable()
export class filterBadgeEarned implements PipeTransform {
    transform(objects: any[], number: any): any[] {
        if (objects) {
                
            return objects.filter(object => {
                return object.earned == number;
            });
        }
    }
}
