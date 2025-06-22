import { ViewportScroller } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NavBarActions } from 'src/app/integration/classes/navbar_actions';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  @Input() actions: NavBarActions[] = [];

  constructor(private viewPortScroller: ViewportScroller) {

  }
}
