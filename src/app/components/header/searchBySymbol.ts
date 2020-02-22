import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBySymbol'
})
export class SearchBySymbolPipe implements PipeTransform {

  transform(companies: Company[], searchText: string): Company[] {
    if (!searchText) return null;
    searchText = searchText.toLowerCase();
    
    return companies.filter(comp =>  {
      if(comp.name !== undefined)
       return comp.name.toLowerCase()
        .indexOf(searchText.toLowerCase()) !== -1
        || comp.symbol.toLowerCase()
        .indexOf(searchText.toLowerCase()) !== -1
    });
  }

}

interface Company  {
  symbol: string,
  name: string,
  price: number,
  exchange: string

}