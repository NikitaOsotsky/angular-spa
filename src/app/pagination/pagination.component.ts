import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
  /**
   * object[], of filteredNews
   */
  @Input() blocks: object[];

  /**
   * number, items count on one page
   */
  @Input() itemsOnPage: number;

  /**
   * one page of blocks
   */
  @Output() paginatedItems = new EventEmitter();

  protected newItems = [[]];
  protected currentPage = 0;
  protected target: any = undefined;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.currentPage = 0;
    this.paginatedItems.emit(this.breakToPages(this.blocks)[this.currentPage]);
    this.moveToPage(this.currentPage, undefined);
  }

  private breakToPages(items: Array<object>) {
    let a = this.itemsOnPage || 6;
    a = (Number.isInteger(+a) && a > 0) ? +a : 6;
    this.newItems = [[]];
    for (let i = 0, j = 0; i < items.length; i++) {
      if (!items[i]) {
        items.splice(i, 1);
        i--;
        continue;
      }
      if (i % a || i === 0) {
        this.newItems[j].push(items[i]);
      } else {
        j++;
        this.newItems[j] = [];
        this.newItems[j].push(items[i]);
      }
    }
    return this.newItems;
  }

  protected moveToPage(page: number, event: any) {
    if (!event) {
      event = {};
      event.target = document.querySelector('.li-default');
      if (!event.target) { return false; }
      event.target.className = 'li-active';
      this.target = event.target;
      return false;
    }
    this.currentPage = page;
    event.target.className = 'li-active';
    try {
      this.target.className = 'li-default';
    } catch (error) {}
    this.target = event.target;
    this.paginatedItems.emit(this.newItems[this.currentPage]);
  }

}
