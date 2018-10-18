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

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.paginatedItems.emit(this.blocks);
  }
}
