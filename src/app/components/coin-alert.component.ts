import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ac-coin-alert',
  template: `
    <div class="text-white text-base md:text-3xl rounded w-full mx-auto mt-4" [ngClass]="{'bg-green-700': !itsAshitcoin, 'bg-red-700': itsAshitcoin}">
      <div *ngIf="!itsAshitcoin" class="flex justify-center items-center flex-col">
        <div class="w-24">
        <ac-generic-anim [options]="{ path: '/assets/lottie/checkmark-animation.json', loop: false }"></ac-generic-anim>
        </div>
        <p class="text-xl font-bold text-green-100 text-center rounded-b w-full py-2" [ngClass]="{'bg-green-600': !itsAshitcoin}">It's safe (always DYOR)</p>
      </div>
      <div *ngIf="itsAshitcoin" class="flex justify-center items-center flex-col">
        <div class="w-16 py-4">
        <ac-generic-anim [options]="{ path: '/assets/lottie/alert.json', loop: false }"></ac-generic-anim>
        </div>
        <p class="font-bold text-red-100 text-center rounded w-full py-2" [ngClass]="{'bg-red-600': itsAshitcoin}">Sorry, this is a shitcoin!</p>
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
