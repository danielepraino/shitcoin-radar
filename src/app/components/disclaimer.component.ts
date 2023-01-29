import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-disclaimer',
  template: `
    <div class="text-xs text-slate-300 dark:text-slate-700 text-center absolute bottom-0 left-0 right-0 mb-4 mx-auto px-2">
      <h5 class="text-sm">Disclaimer</h5>
      <p>
        This page was constructed for the sole purpose of teaching, take this
        tool as is. This is not a financial advice, before buying anything
        always do your own personal research (DYOR). The developer is not
        responsible for any loss resulting from the use of the tool itself.
      </p>
    </div>
  `,
  styles: [],
})
export class DisclaimerComponent implements OnInit {;
  constructor() {}

  ngOnInit(): void {}
}
