import { Component } from '@angular/core';
import { CoingeckoService } from './api/coingecko.service';

@Component({
  selector: 'ac-root',
  template: `
  <div class="flex justify-center items-center bg-slate-900 w-screen h-screen">
    <div class="md:w-1/3 px-6">
      <div class="mb-10">
        <h1 class="text-white text-7xl text-center mb-8">Shitcoin Radar</h1>
        <h2 class="text-white text-3xl text-center">Is that a shitcoin? 💩</h2>
      </div>
      <ac-searchbar (searchCoin)="searchCoin($event)"></ac-searchbar>
      <div class="mb-8" *ngIf="coin.name != null">
        <ac-coin [coin]="coin"></ac-coin>
        <ac-coin-alert [isAshitcoin]="isAshitcoin"></ac-coin-alert>
      </div>
      <div class="text-xs text-slate-600 text-center absolute bottom-0 left-0 right-0 mb-4 mx-auto px-2">
        <h5 class="text-sm">Disclaimer</h5>
        <p>This page was constructed for the sole purpose of teaching, take this tool as is.
           This is not a financial advice, before buying anything always do your own personal research (DYOR).
           The developer is not responsible for any loss resulting from the use of the tool itself.
        </p>
      </div>
    </div>
  </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

  coin: any = {
    name: null,
    symbol: null,
    image: null,
  }

  isAshitcoin: boolean = false;

  constructor(private coingeckoService: CoingeckoService) { }

  ngOnInit(): void {
  }

  searchCoin(searchedCoin: any) {
    this.coingeckoService.getSearch(searchedCoin).subscribe(res => {
      if (res) {
        this.coingeckoService.getCoins(res.coins[0].id).subscribe(res => {
          if (res) {
            this.coinCheck(res);
          }
        });
      }
    });
  }

  coinCheck(res: any) {
    if (res.coingecko_score < 35) {
      this.isAshitcoin = true;
    } else {
      this.isAshitcoin = false;
    }
    this.coin = res;
  }
}
