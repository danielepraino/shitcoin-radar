import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoingeckoService } from '../providers/api/coingecko.service';
import { Coin } from '../models/Coin';
import { map, tap } from 'rxjs';

@Component({
  selector: 'ac-main',
  template: `
    <ac-title (showExplanation)="showExplanation.emit($event)"></ac-title>
    <ac-searchbar *ngIf="coin?.id == null && !isLoading" (searchCoin)="searchCoin($event)" [coinNotFound]="coinNotFound" (resetScan)="resetScan()"></ac-searchbar>
    <div class="mb-8" *ngIf="coin?.id != null && !isLoading">
      <ac-coin-result  [coin]="coin" [itsAshitcoin]="itsAshitcoin"></ac-coin-result>
      <button class="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded w-full mt-4 mb-8 py-2 px-2" (click)="resetScan()">Scan another coin 🔍</button>
    </div>
    <div *ngIf="isLoading" class="w-28 mx-auto rounded-xl">
      <ac-generic-anim [options]="{ path: '/assets/lottie/3-dots-loading.json' }"></ac-generic-anim>
    </div>
  `,
  styles: [
  ]
})
export class MainComponent implements OnInit {

  coin: Coin | null = null;
  itsAshitcoin: boolean = false;
  isLoading: boolean | null = null;
  coinNotFound: boolean | null = false;

  constructor(private coingeckoService: CoingeckoService) { }

  ngOnInit(): void {
  }

  searchCoin(searchedCoin: any) {
    this.coingeckoService.getSearch(searchedCoin).pipe(
      map(res => res.coins.filter((coin: Coin) => coin.name?.toLowerCase() === searchedCoin.toLowerCase() || coin.symbol?.toUpperCase() === searchedCoin.toUpperCase())),
      //shareReplay(),
      tap(x => console.log('ciccio',x))
    ).subscribe(coin => {
      console.log("---> coin.length", coin.length);
      coin.length === 0 ? this.coinNotFound = true : this.coinCheck(coin[0].id);
      console.log("---> this.coinNotFound", this.coinNotFound);
      console.log("this.isLoading", this.isLoading);
      console.log("this.coin", this.coin);
    }); 
  }

  coinCheck(id: Coin) {
    this.isLoading = true;
    console.log("this.isLoading", this.isLoading);
    console.log("COINNNN", id);
    this.coingeckoService.getCoin(id).pipe(
      map(res => res), 
      tap(x => console.log("this.coingeckoService.getCoin", x))
    ).subscribe(coin => {
      console.log(" coin.categories",  coin.categories.find((cat: string) => cat === 'Meme'));
      console.log(" coin.categories tokenized",  coin.categories.filter((cat: string) => cat.includes('Tokenized')));
      coin.coingecko_score < 40 && coin.developer_score < 50 && coin.coingecko_rank > 200 
      && coin.categories.filter((cat: string) => cat.includes('Tokenized')).length === 0
      || coin.categories.find((cat: string) => cat === 'Meme')  
      ? this.itsAshitcoin = true : this.itsAshitcoin = false;
      console.log("this.itsAshitcoin", this.itsAshitcoin);
      this.coin = coin;
      this.isLoading = false;
    });
  }

  resetScan() {
    this.coin = null;
    this.coinNotFound = false;
  }

  @Output() showExplanation = new EventEmitter<any>();

}
