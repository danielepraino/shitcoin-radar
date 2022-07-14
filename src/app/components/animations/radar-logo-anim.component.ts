import { Component, Input, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'ac-radar-logo-anim',
  template: `
    <ng-lottie
      [options]="options"
      (animationCreated)="onAnimate($event)">
    </ng-lottie>
  `,
  styles: [
  ]
})
export class RadarLogoAnimComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/lottie/netsurf-radar-scan.json'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
