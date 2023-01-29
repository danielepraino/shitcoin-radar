import { Component } from '@angular/core';

@Component({
  selector: 'ac-root',
  template: `
    <div [ngClass]="{ dark: isDarkMode }">
      <div class="flex justify-center items-center dark:bg-slate-900 w-screen h-screen relative">
      <div class="text-xs text-slate-300 dark:text-slate-700 absolute top-0 left-0 mt-5 ml-5">Version 1.0.0</div>
        <ac-dark-mode-anim
          class="absolute top-0 right-0 w-20"
          (setDarkMode)="setDarkMode()"
        ></ac-dark-mode-anim>
        <div class="md:w-4/12 px-6">
          <ac-main *ngIf="!isExplanation" (showExplanation)="showExplanation($event)"></ac-main>
          <ac-explanation *ngIf="isExplanation" (showExplanation)="showExplanation($event)"></ac-explanation>
          <ac-disclaimer></ac-disclaimer>
        </div>
      </div>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {

  isDarkMode: boolean | null = null;
  isExplanation: boolean = false;

  constructor() {}

  ngOnInit(): void {
    localStorage['theme'] === 'dark' ? this.isDarkMode = true : this.isDarkMode = false;
  }

  setDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.isDarkMode ? window.localStorage.setItem('theme', 'dark') : window.localStorage.setItem('theme', 'light');
    console.log('this.isDarkMode', this.isDarkMode);
  }

  showExplanation(event: any){
    this.isExplanation = !this.isExplanation;
    console.log("this.isExplanation", this.isExplanation);
  }
}
