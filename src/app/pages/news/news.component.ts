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
  public itemsCount = 6;
  public news: object[];
  public filteredNews: object[] = [];

  constructor(private http: HttpService) { }

  private filterText = '';

  public check(obj, prop) {
    if (obj.hasOwnProperty(prop)) { return obj[prop]; }
    return false;
  }

  ngOnInit() {
    if (this.news) { return; }
    this.http.getData('http://172.20.132.174:3005/news').subscribe((data: Array<object>) => {
        this.news = data;
        this.filteredNews = data;
        this.isLoaded = true;
      },
      (error: any) => {console.log(error); this.error.emit(error);  this.isLoaded = true; } );
  }

  public newCountHandler(filter: number) {
    this.itemsCount = filter;
  }

  public newFilterHandler(filter: string) {
    this.filterText = filter;
    this.filterBlocks();
  }

  public paginationHandler(array: object[]) {
    this.filteredNews = array;
  }

  private filterBlocks() {
    this.filteredNews = [];
    for (const item of this.news) {
      if (this.check(item, 'name').toLowerCase().includes(this.filterText.toLowerCase())) {
        this.filteredNews.push(item);
      }
    }
  }

}
