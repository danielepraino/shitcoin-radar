import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ac-searchbar',
  template: `
    <form class="flex justify-center items-center flex-wrap md:flex-nowrap w-full ">
      <input class="border-2 border-gray-100 rounded w-full h-10 mb-4 md:mb-0" type="text" name="searchbar" id="searchbar" #searchbar="ngModel" ngModel>
      <button class="text-white bg-blue-600 hover:bg-blue-700 py-2 px-2 rounded md:ml-4 w-full md:w-52" (click)="searchCoin.emit(searchbar.value)">Let's find out! 🙏</button>
    </form>
  `,
  styles: [
  ]
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() searchCoin = new EventEmitter<NgForm>();

}
