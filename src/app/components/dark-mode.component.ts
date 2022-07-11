import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'ac-dark-mode',
  template: `
    <ng-lottie
      [options]="options"
      (animationCreated)="onAnimate($event)"
      (click)="updateAnimation(); setDarkMode.emit(false)">
    </ng-lottie>
  `,
  styles: [
  ]
})
export class DarkModeComponent implements OnInit {

  anim: any;
  direction: number = -1;

  options: AnimationOptions = {
    path: '/assets/lottie/light-dark-mode-button.json',
    autoplay: false,
    loop: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  onAnimate(animationItem: AnimationItem): void {
    this.anim = animationItem;
  }

  updateAnimation(): void {
    this.direction == -1 ? this.direction = 1 : this.direction = -1;
    this.anim.play();
    this.anim.setDirection(this.direction);
    this.anim.setSpeed(5);
  }

  @Output() setDarkMode = new EventEmitter<any>();

}
