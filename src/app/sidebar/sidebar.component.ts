import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [HttpService]
})
export class SidebarComponent implements OnInit {
  public menu: Array<string>;
  protected isLoaded: boolean;
  constructor(private http: HttpService) {
  }
  public getRout(item) {
    if (item.toLowerCase() === 'home') { return ''; }
    return ('/' + item.toLowerCase());
  }
  ngOnInit() {
    this.http.getData().subscribe((data: Array<string>) => {
      this.menu = data;
      this.isLoaded = true;
    });
  }
}
