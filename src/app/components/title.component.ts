import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-title',
  template: `
    <div class="flex flex-col-reverse md:flex-row justify-center items-center">
      <div class="w-full">
        <img class="w-48 mx-auto mb-5" src="/assets/img/shitcoin_radar_logo.png" alt="Shitcoin Radar Logo">
      </div>
      <div class="w-24 lg:w-32 relative top-40 right-10 lg:right-44">
        <ac-generic-anim [options]="{ path: '/assets/lottie/netsurf-radar-scan.json' }"></ac-generic-anim>
      </div>
    </div>
    <div class="flex justify-center content-center mb-4">
      <h2 class="text-black dark:text-white text-2xl">
        Is that a <span class="underline underline-offset-1 cursor-pointer" (click)="showExplanation.emit($event)">shitcoin</span>?
      </h2>
      <img class="w-6 h-5 my-auto ml-2" src="/assets/img/emoji_shit.png" alt="Emoji shit">
    </div>
  `,
  styles: []
})

export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() showExplanation = new EventEmitter<any>();
}
