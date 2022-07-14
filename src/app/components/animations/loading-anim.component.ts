import { Component, Input, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'ac-loading-anim',
  template: `
    <ng-lottie
      [options]="options"
      (animationCreated)="onAnimate($event)">
    </ng-lottie>
  `,
  styles: [
  ]
})
export class LoadingAnimComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/lottie/3-dots-loading.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
