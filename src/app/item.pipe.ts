import { Pipe, PipeTransform } from '@angular/core';
import {Item} from './pages/home/home.component';
import {CurrencyPipe} from '@angular/common';

@Pipe({
  name: 'item'
})
export class ItemPipe implements PipeTransform {

  constructor() {
  }

  transform(item: Item): string {
    const currencyPipe = new CurrencyPipe("en-US");
    return `${item.name} - ${currencyPipe.transform(item.price)}`;
  }

}
