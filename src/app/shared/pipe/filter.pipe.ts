import { Pipe, PipeTransform } from '@angular/core';
import { ProductsComponent } from 'src/app/products/products.component';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterText:string): any[] {
    if (filterText.length == 1) {
      return value;
    }
    return value.filter(p=>p.title.toLowerCase().indexOf(filterText.toLowerCase())!=-1);
  }
}
