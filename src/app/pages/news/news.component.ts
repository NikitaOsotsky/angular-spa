import { Component, EventEmitter, OnInit, Output, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  @Output() error: EventEmitter<any> = new EventEmitter();
  protected isLoaded: boolean;
  public itemsCount: number = undefined;
  public news: object[];
  public paginatedNews: object[];
  public filteredNews: object[];

  constructor(private cdr: ChangeDetectorRef, private route: ActivatedRoute) { }

  private filterText = '';

  public check(obj, prop) {
    if (obj.hasOwnProperty(prop)) { return obj[prop]; }
    return false;
  }

  ngOnInit() {
    this.news = this.route.snapshot.data.HnResolver;
    this.itemsCount = 6;
    this.filterBlocks();
    this.isLoaded = true;
  }

  public newCountHandler(filter: number) {
    this.itemsCount = filter;
  }

  public newFilterHandler(filter: string) {
    this.filterText = filter;
    this.filterBlocks();
  }

  public paginationHandler(array: object[]) {
    this.paginatedNews = array;
    this.cdr.detectChanges();
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
