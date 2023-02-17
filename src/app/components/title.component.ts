import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-title',
  template: `
  <div>
    <img class="w-56 md:w-80 mx-auto mb-4" src="/assets/img/shitcoin_radar_logo.png" alt="Shitcoin Radar Logo">
    <div class="flex justify-center content-center mb-6">
      <h2 class="font-semibold text-slate-600 dark:text-slate-100 text-2xl">
        Is that a <span class="underline underline-offset-1 cursor-pointer" (click)="showExplanation.emit($event)">shitcoin</span>?
      </h2>
      <img class="w-6 h-5 my-auto ml-2" src="/assets/img/emoji_shit.png" alt="Emoji shit">
    </div>
  </div>
  `,
  styles: []
})

export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() showExplanation = new EventEmitter<any>();
}
