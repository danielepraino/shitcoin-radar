import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'ac-error',
  template: `
    <div [@errorToast]="showError ? 'open' : 'closed'" class="font-semibold text-xs text-red-100 bg-red-600 rounded p-1 mb-1">
      <div>
        <div class="text-center">
          {{ errorMsg }}
        </div>
        <div class="h-4 w-4 text-red-100 cursor-pointer relative float-right bottom-4">
          <fa-icon [icon]="faXmark" (click)="showError = false; formRef?.resetForm()"></fa-icon>
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
  faXmark = faXmark;

  showError: boolean = true;

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.showError = false;
      this.formRef?.resetForm();
    }, 1500);
  }

  @Input() errorMsg: string | null = null;
  @Input() formRef: NgForm | undefined;
}

