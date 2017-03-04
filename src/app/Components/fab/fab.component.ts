import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dmg-fab',
  templateUrl: './fab.component.html',
  styleUrls: ['./fab.component.scss']
})
export class FabComponent implements OnInit {
  isActive: boolean = false;
  hidden: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  openFab() {
    this.isActive = !this.isActive;
  }

}
