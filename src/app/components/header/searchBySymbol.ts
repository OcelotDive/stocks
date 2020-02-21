import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBySymbol'
})
export class SearchBySymbolPipe implements PipeTransform {

  transform(colours: Colour[], searchText: string): Colour[] {
    if (!searchText) return colours;
    searchText = searchText.toLowerCase();
    
    return colours.filter(col => col.name.toLowerCase()
        .indexOf(searchText.toLowerCase()) !== -1);
  }

}

interface Colour  {
  name: string,
  hex: string

}