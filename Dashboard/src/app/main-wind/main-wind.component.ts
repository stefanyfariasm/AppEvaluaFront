import { Component, OnInit, AfterViewInit } from '@angular/core';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-main-wind',
  templateUrl: './main-wind.component.html',
  styleUrls: ['./main-wind.component.css']
})
export class MainWindComponent implements OnInit, AfterViewInit {

  constructor() { }

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
