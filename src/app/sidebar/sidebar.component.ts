import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { HttpService} from '../http.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  @Output() error: EventEmitter<any> = new EventEmitter();
  public menu: Array<string>;
  protected isLoaded: boolean;

  constructor(private http: HttpService) {
  }

  public getRout(item: string): string {
    if (item.toLowerCase() === 'home') { return ''; }
    return ('/' + item.toLowerCase());
  }

  ngOnInit() {
    this.http.getData('menu').subscribe((data: Array<string>) => {
      this.menu = data;
      this.isLoaded = true;
    },
      (error: any) => {console.log(error); this.error.emit(error);  this.isLoaded = true; } );
  }
}
