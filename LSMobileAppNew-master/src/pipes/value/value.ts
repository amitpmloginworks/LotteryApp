import { Injectable, Pipe,PipeTransform } from '@angular/core';
@Pipe({
  name: 'value'
})
@Injectable()
export class ValuePipe implements PipeTransform{
  transform(value) {

    console.log(value);
    return value;
  }
}
