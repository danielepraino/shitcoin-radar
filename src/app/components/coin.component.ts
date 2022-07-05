import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-coin',
  template: `
    <!-- <div class="flex justify-center items-center text-white text-3xl bg-slate-800 rounded w-full mx-auto mt-10 py-2">
      <img class="mr-4" src="https://assets.coingecko.com/coins/images/12171/thumb/polkadot.png?1639712644" alt="Polkadot">
      <p class="mr-2">Polkadot - </p>
      <p>DOT</p>
    </div> -->
    <div class="flex justify-center items-center text-white text-base md:text-3xl bg-slate-800 rounded w-full mx-auto mt-8 py-2">
      <img class="mr-4" [src]="coin.image.thumb" [alt]="coin.name">
      <p class="mr-2">{{coin.name}} - </p>
      <p>{{coin.symbol.toUpperCase()}}</p>
    </div>
  `,
  styles: [
  ]
})
export class CoinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() coin: any = {};

}
