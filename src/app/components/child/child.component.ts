import {Component, Input, OnInit} from '@angular/core';
import {Item} from '../../pages/home/home.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {

  @Input()
  item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
