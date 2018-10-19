import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

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

  private newItems = [[]];
  protected currentPage = 0;

  constructor() { }

  private static isInteger(num) {
    return (num ^ 0) === num;
  }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.breakToPages(this.blocks));
    this.paginatedItems.emit(this.breakToPages(this.blocks)[this.currentPage]);
  }

  private breakToPages(items) {
    let a = this.itemsOnPage || 6;
    a = (PaginationComponent.isInteger(+a) && a > 0) ? +a : 6;
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

}
