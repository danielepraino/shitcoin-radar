import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
        class="text-white text-center font-bold bg-blue-600 hover:bg-blue-700 rounded w-full mt-4 mb-8 py-2 px-2"
        (click)="showExplanation.emit($event)"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 inline-block float-left"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          /></svg>
          <span>Go back</span>
      </button>
    </div>
  `,
  styles: [],
})
export class ExplanationComponent implements OnInit {
  coin: any = {
    name: null,
    symbol: null,
    image: null,
  };

  constructor() {}

  ngOnInit(): void {}

  @Output() showExplanation = new EventEmitter<any>();
}
