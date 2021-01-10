import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productdfilter'
})
export class ProductdfilterPipe implements PipeTransform {

  
  transform(products:any[] , term:string): any {
    if(term == undefined)
    {
      return products;
    }
      return products.filter(function(products){
            return products.title.toLowerCase().includes(term.toLowerCase())
      });
    }
}
