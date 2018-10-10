import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menu: any = [
    '1',
    '2',
    '3',
    '4'
  ];
  constructor() {
  }

  ngOnInit() {
  }

}
