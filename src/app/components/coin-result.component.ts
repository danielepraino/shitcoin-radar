import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-coin-result',
  template: `
    <ac-coin [coin]="coin"></ac-coin>
    <ac-coin-alert [itsAshitcoin]="itsAshitcoin"></ac-coin-alert>
  `,
  styles: []
})

export class CoinResultComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() coin: any = {};
  @Input() itsAshitcoin: boolean = false;
}
