import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpService} from '../../http.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Output() error: EventEmitter<any> = new EventEmitter();
  protected isLoaded: boolean;
  public news: object[];

  constructor(private http: HttpService) { }

  public check(obj, prop) {
    if (obj.hasOwnProperty(prop)) { return obj[prop]; }
    return false;
  }

  ngOnInit() {
    this.http.getData('http://172.20.132.174:3005/news').subscribe((data: Array<object>) => {
        this.news = data;
        this.isLoaded = true;
        console.log(this.news);
      },
      (error: any) => {console.log(error); this.error.emit(error);  this.isLoaded = true; } );
  }

}
