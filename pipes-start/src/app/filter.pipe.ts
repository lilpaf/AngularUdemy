import { Pipe, PipeTransform } from '@angular/core';
import { Server } from './server.model';

@Pipe({
  name: 'filter',
  pure: false, // Can lead to performance issues
})
export class FilterPipe implements PipeTransform {
  transform(value: Server[], filterString: string, propName: keyof Server) {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    return value.filter((item) => {
      return item[propName].toString().includes(filterString);
    });
  }
}
