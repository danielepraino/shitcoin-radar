import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoingeckoService } from '../api/coingecko.service';

@Component({
  selector: 'ac-main',
  template: `
    <ac-title (showExplanation)="showExplanation.emit($event)"></ac-title>
    <ac-searchbar *ngIf="coin.name == null && !isLoading" (searchCoin)="searchCoin($event)" [coinNotFound]="coinNotFound"></ac-searchbar>
    <div class="mb-8" *ngIf="coin.name != null && !isLoading">
      <ac-coin-result  [coin]="coin" [itsAshitcoin]="itsAshitcoin"></ac-coin-result>
      <button class="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded w-full mt-4 mb-8 py-2 px-2" (click)="returnToMain()">Scan another coin 🔍</button>
    </div>
    <div *ngIf="isLoading" class="w-28 mx-auto rounded-xl">
      <ac-generic-anim [options]="{ path: '/assets/lottie/3-dots-loading.json' }"></ac-generic-anim>
    </div>
  `,
  styles: [
  ]
})
export class MainComponent implements OnInit {

  coin: any = {
    name: null,
    symbol: null,
    image: null,
  };

  itsAshitcoin: boolean = false;
  isLoading: boolean | null = null;
  coinNotFound: boolean | null = null;

  constructor(private coingeckoService: CoingeckoService) { }

  ngOnInit(): void {
  }

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

  returnToMain() {
    this.coin = {};
  }

  @Output() showExplanation = new EventEmitter<any>();

}
