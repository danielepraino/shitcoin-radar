import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-title',
  template: `
    <div class="mb-10">
      <div
        class="flex flex-col-reverse md:flex-row justify-center items-center"
      >
        <div class="w-full">
          <h1
            class="font-semibold text-black dark:text-white text-5xl md:text-6xl text-center mb-4"
          >
            Shitcoin Radar
          </h1>
        </div>
        <div class="w-24">
          <ac-generic-anim [options]="{ path: '/assets/lottie/netsurf-radar-scan.json' }"></ac-generic-anim>
        </div>
      </div>
      <h2 class="text-black dark:text-white text-2xl text-center">
        Is that a <span class="underline underline-offset-1 cursor-pointer" (click)="showExplanation.emit($event)">shitcoin</span>? 💩
      </h2>
    </div>
  `,
  styles: [],
})
export class TitleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() showExplanation = new EventEmitter<any>();
}
