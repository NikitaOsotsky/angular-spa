import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  /**
   * object[], of filteredNews
   */
  @Input() blocks: object[];
  /**
   * number, items count on one page
   */
  @Input() itemsOnPage: number;

  constructor() { }

  ngOnInit() {
  }

}
