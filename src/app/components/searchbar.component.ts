import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faMagnifyingGlass, faXmark, faSatelliteDish } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ac-searchbar',
  template: `
  <div>
    <div>
      <ac-error class="w-full" *ngIf="!f.valid && coinNotFound" errorMsg="Sorry, coin not found! Scan another coin" [formRef]="f"></ac-error>
      <ac-error class="w-full" *ngIf="f.dirty && searchbarRef.hasError('required')" errorMsg="Write a coin you want to search for" [formRef]="f"></ac-error>
      <ac-error class="w-full" *ngIf="f.dirty && searchbarRef.hasError('pattern')" errorMsg="No symbols allowed!" [formRef]="f"></ac-error>
    </div>
    <div>
      <form
        class="flex justify-center items-center flex-wrap xs:flex-nowrap w-full"
        #f="ngForm"
      >
        <div class="relative w-full">
          <fa-icon class="text-gray-400 pointer-events-none absolute top-5 transform -translate-y-1/2 left-4" [icon]="faMagnifyingGlass"></fa-icon>
          <input
            class="text-slate-600 text-center border-2 border-slate-400 dark:border-slate-900 w-full rounded-full h-10 mb-4 p-2 px-12"
            type="text"
            name="searchbar"
            id="searchbar"
            placeholder="e.g. Shiba Inu or SHIB"
            #searchbarRef="ngModel"
            ngModel
            required
            pattern="^[a-zA-Z0-9 ]*$"
            maxlength="25"
          />
          <fa-icon *ngIf="f.dirty && searchbarRef.value.length > 0" class="text-gray-400 cursor-pointer absolute top-5 transform -translate-y-1/2 right-4" [icon]="faXmark" (click)="f.resetForm(); resetScan.emit()"></fa-icon>
        </div>
        <button
          class="text-white font-bold bg-green-400 hover:bg-green-500 py-2 px-2 rounded-full w-full disabled:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed"
          [disabled]="!f.valid"
          (click)="searchCoin.emit(searchbarRef.value); f.resetForm()"
        >
          Let's find out!
          <fa-icon class="ml-2" [icon]="faSatelliteDish"></fa-icon>
        </button>
      </form>
    </div>
  </div>
  `,
  styles: []
})

export class SearchbarComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faXmark = faXmark;
  faSatelliteDish = faSatelliteDish;

  constructor() {}

  ngOnInit(): void {
    console.log("coinNotFound", this.coinNotFound);
  }

  @Output() searchCoin = new EventEmitter<NgForm>();
  @Output() resetScan = new EventEmitter<any>();
  @Input() coinNotFound: boolean | null = null;
}
