import { Component, Input, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'ac-alert-anim',
  template: `
    <ng-lottie
      [options]="options"
      (animationCreated)="onAnimate($event)">
    </ng-lottie>
  `,
  styles: [
  ]
})
export class AlertAnimComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/lottie/alert-notification-character.json',
  };

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
