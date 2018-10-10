import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [HttpService]
})
export class SidebarComponent implements OnInit {
  public menu: Array<string> = ['Please, wait...'];
  constructor(private http: HttpService) {
  }

  ngOnInit() {
    this.http.getData().subscribe((data: Array<string>) => this.menu = data);
  }

}
