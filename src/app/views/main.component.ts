import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CoingeckoService } from '../providers/api/coingecko.service';
import { Coin } from '../models/Coin';
import { map, tap } from 'rxjs';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ac-main',
  template: `
    <div>
      <ac-title (showExplanation)="showExplanation.emit($event)"></ac-title>
    </div>
    <div>
      <ac-searchbar *ngIf="coin?.id == null && !isLoading" (searchCoin)="searchCoin($event)" [coinNotFound]="coinNotFound" (resetScan)="resetScan()"></ac-searchbar>
    </div>
    <div class="mb-8" *ngIf="coin?.id != null && !isLoading">
      <ac-coin-result  [coin]="coin" [itsAshitcoin]="itsAshitcoin"></ac-coin-result>
      <button class="text-white font-bold bg-green-400 hover:bg-green-500 rounded-full w-full mt-4 mb-8 py-2 px-2" (click)="resetScan()">
      Scan another coin
      <fa-icon class="ml-2" [icon]="faRepeat"></fa-icon>
      </button>
    </div>
    <div *ngIf="isLoading" class="w-28 mx-auto rounded-xl">
      <ac-generic-anim [options]="{ path: '/assets/lottie/3-dots-loading.json' }"></ac-generic-anim>
    </div>
  `,
  styles: []
})

export class MainComponent implements OnInit {
  faRepeat = faRepeat;

  coin: Coin | null = null;
  itsAshitcoin: boolean = false;
  isLoading: boolean | null = null;
  coinNotFound: boolean | null = null;

  constructor(private coingeckoService: CoingeckoService) { }

  ngOnInit(): void {}

  searchCoin(searchedCoin: any) {
    this.coingeckoService.getSearch(searchedCoin).pipe(
      map(res => res.coins.filter((coin: Coin) => coin.name?.toLowerCase().trim() === searchedCoin.toLowerCase().trim() || coin.symbol?.toUpperCase().trim() === searchedCoin.toUpperCase().trim())),
    ).subscribe(coin => {
      coin.length === 0 ? this.coinNotFound = true : this.coinCheck(coin[0].id);
    }); 
  }

  coinCheck(id: Coin) {
    this.isLoading = true;
    this.coingeckoService.getCoin(id).pipe(
      map(res => res), 
    ).subscribe(coin => {
      coin.coingecko_score < 40 && coin.developer_score < 50 && coin.coingecko_rank > 200 
      && coin.categories.filter((cat: string) => cat.includes('Tokenized')).length === 0
      || coin.categories.find((cat: string) => cat === 'Meme')  
      ? this.itsAshitcoin = true : this.itsAshitcoin = false;
      this.coin = coin;
      this.isLoading = false;
    });
  }

  resetScan() {
    this.coin = null;
    this.coinNotFound = null;
  }

  @Output() showExplanation = new EventEmitter<any>();
}
