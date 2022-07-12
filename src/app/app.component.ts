import { Component } from '@angular/core';

import { CoingeckoService } from './api/coingecko.service';

@Component({
  selector: 'ac-root',
  template: `
    <div [ngClass]="{ dark: isDarkMode }">
      <div class="flex justify-center items-center dark:bg-slate-900 w-screen h-screen relative">
        <ac-dark-mode
          class="absolute top-0 right-0 w-20"
          (setDarkMode)="setDarkMode($event)"
        ></ac-dark-mode>
        <div class="md:w-1/3 px-6">
          <div class="mb-10">
            <div class="flex flex-col-reverse md:flex-row justify-center items-center">
              <div class="w-full">
                <h1 class="text-black dark:text-white text-5xl md:text-7xl text-center mb-8">
                  Shitcoin Radar
                </h1>
              </div>
              <div class="w-24">
                <ac-radar-logo></ac-radar-logo>
              </div>
            </div>
            <h2 class="text-black dark:text-white text-3xl text-center">
              Is that a shitcoin? 💩
            </h2>
          </div>
          <ac-searchbar *ngIf="coin.name == null" (searchCoin)="searchCoin($event)" [coinNotFound]="coinNotFound"></ac-searchbar>
          <div class="mb-8" *ngIf="coin.name != null">
            <ac-coin [coin]="coin"></ac-coin>
            <ac-coin-alert [itsAshitcoin]="itsAshitcoin"></ac-coin-alert>
          </div>
          <div
            class="text-xs text-slate-600 text-center absolute bottom-0 left-0 right-0 mb-4 mx-auto px-2"
          >
            <h5 class="text-sm">Disclaimer</h5>
            <p>
              This page was constructed for the sole purpose of teaching, take
              this tool as is. This is not a financial advice, before buying
              anything always do your own personal research (DYOR). The
              developer is not responsible for any loss resulting from the use
              of the tool itself.
            </p>
          </div>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  coin: any = {
    name: null,
    symbol: null,
    image: null,
  };

  itsAshitcoin: boolean = false;
  isDarkMode: boolean = true;
  coinNotFound: boolean | null = null;

  constructor(private coingeckoService: CoingeckoService) {}

  ngOnInit(): void {}

  searchCoin(searchedCoin: any) {
    this.coingeckoService.getSearch(searchedCoin).subscribe((res) => {
      if (res.coins.length > 0) {
        this.coingeckoService.getCoins(res.coins[0].id).subscribe((res) => {
          if (res) {
            this.coinCheck(res);
          }
        });
      } else {
        this.coinNotFound = true;
      }
    }, (error) => {
      console.log("ERROR: ", error);
    });
  }

  coinCheck(res: any) {
    if (res.coingecko_score < 35) {
      this.itsAshitcoin = true;
    } else {
      this.itsAshitcoin = false;
    }
    this.coin = res;
  }

  setDarkMode(event: any) {
    this.isDarkMode = !this.isDarkMode;
    console.log('this.isDarkMode', this.isDarkMode);
  }
}
