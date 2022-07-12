import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ac-coin-alert',
  template: `
    <div class="text-white text-base md:text-3xl rounded w-full mx-auto mt-4" [ngClass]="{'bg-green-800': !itsAshitcoin, 'bg-red-800': itsAshitcoin}">
      <div *ngIf="!itsAshitcoin" class="flex justify-center items-center flex-col">
        <div class="w-24">
          <ac-check-anim></ac-check-anim>
        </div>
        <p class="font-bold text-center rounded-b w-full py-2" [ngClass]="{'bg-green-600': !itsAshitcoin}">It's safe (always DYOR)</p>
      </div>
      <div *ngIf="itsAshitcoin" class="flex justify-center items-center flex-col">
        <div class="w-24">
          <ac-alert-anim></ac-alert-anim>
        </div>
        <p class="font-bold text-center rounded w-full py-2" [ngClass]="{'bg-red-600': itsAshitcoin}">Sorry, this is a shitcoin!</p>
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

  @Input() itsAshitcoin: boolean = false;

}
