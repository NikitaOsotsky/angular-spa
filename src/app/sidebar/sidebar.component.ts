import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public menu: Array<string> = ['Please, wait...'];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:3005/menu').subscribe((data: Array<string>) => this.menu = data);
  }

}
