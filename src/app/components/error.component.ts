import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ac-error',
  template: `
    <div [@errorToast]="showError ? 'open' : 'closed'" class="font-semibold text-xs text-red-100 bg-red-600 rounded p-1 mb-1">
      <div>
        <div class="text-center">
          {{ errorMsg }}
        </div>
        <div class="h-4 w-4 text-red-100 cursor-pointer relative float-right bottom-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            (click)="showError = false; formRef?.resetForm()"
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
  styles: [],
  animations: [    
    trigger('errorToast', [   
      state('open', style({ opacity: 1, transform: 'translateY(0%)' })), 
      state('closed', style({ opacity: 0, transform: 'translateY(-100%)' })),             
      transition('open <=> closed', [          
        animate('500ms ease-in-out')
      ]),  
    ])  
  ]
})

export class ErrorComponent implements OnInit {
  showError: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showError = false;
      this.formRef?.resetForm();
    }, 2500);
  }

  @Input() errorMsg: string | null = null;
  @Input() formRef: NgForm | undefined;
}

