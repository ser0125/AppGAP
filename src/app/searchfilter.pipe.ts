import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any, searchText: string): any {
    if (!value) {return null; }
    if (!searchText) {return value; }

    searchText = searchText.toLowerCase();
    return value.filter(function(items) {
      return items['branch'].toLowerCase().includes(searchText);
  });
  }
}
