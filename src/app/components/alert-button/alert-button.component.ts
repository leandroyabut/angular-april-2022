import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.sass']
})
export class AlertButtonComponent implements OnInit {

  @Input()
  alertMessage!: string;
  showing = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowing() {
    this.showing = !this.showing;
  }

}
