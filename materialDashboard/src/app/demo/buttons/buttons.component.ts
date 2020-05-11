import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
  <i class="material-icons">face</i>
  <button mat-button>Basic</button>
  
  <mat-checkbox>Check me!Now</mat-checkbox>
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
