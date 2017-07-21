import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  constructor() {}
today: number = Date.now();
}