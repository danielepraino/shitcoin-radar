import { Component, Input, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'ac-generic-anim',
  template: `
  <ng-lottie
    [options]="options"
    >
  </ng-lottie>
`,
  styles: [
  ]
})
export class GenericAnimComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() options: AnimationOptions = {};

}
