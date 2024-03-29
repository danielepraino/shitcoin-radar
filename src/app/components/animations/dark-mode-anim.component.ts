import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'ac-dark-mode-anim',
  template: `
    <ng-lottie
      class="cursor-pointer"
      [options]="options"
      (animationCreated)="onAnimate($event)"
      (click)="updateAnimation(); setDarkMode.emit(false)">
    </ng-lottie>
  `,
  styles: []
})

export class DarkModeAnimComponent implements OnInit {
  anim: any;
  direction: number | null = null;
  startFrame: number = 0;
  endFrame: number = 134;

  options: AnimationOptions = {
    path: '/assets/lottie/light-dark-mode-button.json',
    autoplay: false,
    loop: false,
  };

  constructor() {}

  ngOnInit(): void {
    localStorage['theme'] === 'light' ? this.direction = 1 : this.direction = -1;
  }

  onAnimate(animationItem: AnimationItem): void {
    this.anim = animationItem;
    localStorage['theme'] === 'light' ? this.anim.currentRawFrame = this.endFrame : this.anim.currentRawFrame = this.startFrame;
  }

  updateAnimation(): void {
    this.direction == 1 ? this.direction = -1 : this.direction = 1;
    this.anim.play();
    this.anim.setDirection(this.direction);
    this.anim.setSpeed(5);
  }

  @Output() setDarkMode = new EventEmitter<any>();
}
