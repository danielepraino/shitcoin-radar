import { Component, Input, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'ac-radar-logo',
  template: `
    <ng-lottie
      [options]="options"
      (animationCreated)="onAnimate($event)">
    </ng-lottie>
  `,
  styles: [
  ]
})
export class RadarLogoComponent implements OnInit {

  logoPath: string = '/assets/lottie/netsurf-radar-scan.json';

  options: AnimationOptions = {
    path: '/assets/lottie/netsurf-radar-scan.json'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  @Input() isDarkMode: boolean | null = null;

}
