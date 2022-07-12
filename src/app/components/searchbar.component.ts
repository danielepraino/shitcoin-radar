import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ac-searchbar',
  template: `
    <form
      class="flex justify-center items-center flex-wrap md:flex-nowrap w-full"
      #f="ngForm"
    >
      <div
        *ngIf="f.dirty && searchbarRef.errors?.['required']"
        class="text-xs text-red-500"
      >
        write a coin you want to search for
      </div>
      <div
        *ngIf="f.dirty && searchbarRef.errors?.['pattern']"
        class="text-xs text-red-500"
      >
        no symbols allowed!
      </div>
      <div
        *ngIf="coinNotFound"
        class="text-xs text-red-500"
      >
        sorry, coin not found!
      </div>
      <div class="relative w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-400 pointer-events-none absolute top-5 transform -translate-y-1/2 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          class="text-center border-2 border-slate-900 w-full rounded h-10 mb-4 md:mb-0 p-2 px-12"
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="e.g. SafeMoon or SFM"
          #searchbarRef="ngModel"
          ngModel
          required
          pattern="^[a-zA-Z0-9]*$"
          maxlength="25"
        />
        <svg
          *ngIf="f.dirty && searchbarRef.value.length > 0"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-400 cursor-pointer absolute top-5 transform -translate-y-1/2 right-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          (click)="searchbarRef.reset(); coinNotFound = false"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <button
        class="text-white font-bold bg-blue-600 hover:bg-blue-700 py-2 px-2 rounded md:ml-4 w-full md:w-52 disabled:opacity-50"
        [disabled]="!f.valid"
        (click)="searchCoin.emit(searchbarRef.value)"
      >
        Let's find out! 🙏
      </button>
    </form>
  `,
  styles: [],
})
export class SearchbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log("coinNotFound", this.coinNotFound);
  }

  @Output() searchCoin = new EventEmitter<NgForm>();
  @Input() coinNotFound: boolean | null = null;
}
