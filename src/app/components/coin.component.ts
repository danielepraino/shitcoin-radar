import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-coin',
  template: `
    <div class="flex justify-center items-center text-black dark:text-white text-base md:text-3xl bg-gray-200 dark:bg-slate-800 rounded w-full mx-auto mt-8 py-2">
      <img class="mr-4" [src]="coin.image.thumb" [alt]="coin.name">
      <p class="font-bold text-slate-600 dark:text-slate-300 mr-4">{{coin.name}} </p>
      <p class="font-light text-slate-500 dark:text-slate-200">{{coin.symbol.toUpperCase()}}</p>
    </div>
  `,
  styles: []
})

export class CoinComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  @Input() coin: any = {};
}
