import { Component, Input, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'ac-check-anim',
  template: `
     <ng-lottie
      [options]="options"
      (animationCreated)="onAnimate($event)">
    </ng-lottie>
  `,
  styles: [
  ]
})
export class CheckAnimComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/lottie/checkmark-animation.json',
    loop: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
