import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-coin-result',
  template: `
    <ng-container>
      <ac-coin [coin]="coin"></ac-coin>
      <ac-coin-alert [itsAshitcoin]="itsAshitcoin"></ac-coin-alert>
    </ng-container>
  `,
  styles: [],
})
export class CoinResultComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() coin: any = {};
  @Input() itsAshitcoin: boolean = false;
}
