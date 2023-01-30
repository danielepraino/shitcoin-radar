import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ac-error',
  template: `
    <div *ngIf="isVisible" class="font-semibold text-xs text-red-400 bg-red-100 dark:bg-red-800 rounded p-1 mb-1">
      <div>
        <div class="text-center">
          {{ errorMsg }}
        </div>
        <div class="h-4 w-4 text-red-400 cursor-pointer relative float-right bottom-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            (click)="this.isVisible = false"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg> 
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ErrorComponent implements OnInit {
  isVisible: boolean | null = null;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.isVisible = true;

    // setTimeout(() => {
    //   this.isVisible = false;
    //   this.cdr.detectChanges();
    // }, 3000);
  }

  @Input() errorMsg: string | null = null;
}

