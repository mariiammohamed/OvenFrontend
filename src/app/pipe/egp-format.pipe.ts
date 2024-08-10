import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egpFormat'
})
export class EgpFormatPipe implements PipeTransform {

  transform(value:number): string{
    return `${value} EGP`
  }

}
