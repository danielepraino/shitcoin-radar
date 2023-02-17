import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ac-explanation',
  template: `
    <div class="text-black dark:text-white">
      <h1></h1>
      <div class="bg-gray-200 dark:bg-slate-800 rounded px-4 py-2">
        <blockquote class="text-center italic">
        "...there is also a class of cryptocurrencies
        without any true function or worth: tokens that exist either as a joke,
        as a get-rich-quick scheme or sometimes to troll existing projects.
        Collectively, they are referred to as shitcoins."
        </blockquote>
      </div>
      <a
        class="text-xs float-right underline underline-offset-1 mt-2"
        href="https://currency.com/what-is-a-shitcoin-your-ultimate-guide"
        target="_blank"
        >Source: Currency.com</a>
      <button
        class="text-white text-center font-bold bg-green-400 hover:bg-green-500 rounded-full w-full mt-4 mb-8 py-2 px-2"
        (click)="showExplanation.emit($event)"
      >
        <fa-icon class="h-6 w-6 inline-block float-left" [icon]="faArrowLeft"></fa-icon>
        Go back
      </button>
    </div>
  `,
  styles: []
})

export class ExplanationComponent implements OnInit {
  faArrowLeft = faArrowLeft;

  coin: any = {
    name: null,
    symbol: null,
    image: null,
  };

  constructor() {}

  ngOnInit(): void {}

  @Output() showExplanation = new EventEmitter<any>();
}
