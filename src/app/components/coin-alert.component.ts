import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ac-coin-alert',
  template: `
    <div class="flex justify-center items-center text-white text-base md:text-3xl rounded w-full mx-auto mt-4 py-2" [ngClass]="{'bg-red-600': isAshitcoin, 'bg-green-600': !isAshitcoin}">
      <div *ngIf="!isAshitcoin">
        <p>⛰️💎 It's safe (always DYOR) 💎⛰️</p>
      </div>
      <div *ngIf="isAshitcoin">
        <p>🌋💩 This is a shitcoin! 💩🌋</p>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class CoinAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isAshitcoin: boolean = false;

}
