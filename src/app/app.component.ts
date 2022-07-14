import { Component } from '@angular/core';

import { CoingeckoService } from './api/coingecko.service';

@Component({
  selector: 'ac-root',
  template: `
    <div [ngClass]="{ dark: isDarkMode }">
      <div class="flex justify-center items-center dark:bg-slate-900 w-screen h-screen relative">
        <ac-dark-mode-anim
          class="absolute top-0 right-0 w-20"
          (setDarkMode)="setDarkMode($event)"
        ></ac-dark-mode-anim>
        <div class="md:w-1/3 px-6">
          <div class="mb-10">
            <div class="flex flex-col-reverse md:flex-row justify-center items-center">
              <div class="w-full">
                <h1 class="text-black dark:text-white text-5xl md:text-7xl text-center mb-8">
                  Shitcoin Radar
                </h1>
              </div>
              <div class="w-24">
                <ac-radar-logo-anim></ac-radar-logo-anim>
              </div>
            </div>
            <h2 class="text-black dark:text-white text-3xl text-center">
              Is that a shitcoin? 💩
            </h2>
          </div>
          <ac-searchbar *ngIf="coin.name == null && !isLoading" (searchCoin)="searchCoin($event)" [coinNotFound]="coinNotFound"></ac-searchbar>
          <div *ngIf="isLoading" class="w-28 mx-auto rounded-xl">
            <ac-loading-anim></ac-loading-anim>
          </div>
          <div class="mb-8" *ngIf="coin.name != null">
            <ng-container *ngIf="!isLoading">
              <ac-coin-result [coin]="coin" [itsAshitcoin]="itsAshitcoin"></ac-coin-result>
            </ng-container>
          </div>
          <ac-disclaimer></ac-disclaimer>
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
  isLoading: boolean | null = null;
  coinNotFound: boolean | null = null;

  constructor(private coingeckoService: CoingeckoService) {}

  ngOnInit(): void {}

  searchCoin(searchedCoin: any) {
    this.isLoading = true;
    console.log("this.isLoading", this.isLoading);
    this.coingeckoService.getSearch(searchedCoin).subscribe((res) => {
      if (res.coins.length > 0) {
        this.coingeckoService.getCoins(res.coins[0].id).subscribe((res) => {
          if (res) {
            setTimeout(() => {
              this.isLoading = false;
              console.log("this.isLoading", this.isLoading);
              this.coinCheck(res);
            }, 1000)
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
