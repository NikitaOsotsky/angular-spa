import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  protected current: any;
  protected currentName: string;
  @Output() itemsCountOnPage: EventEmitter<number> = new EventEmitter();
  @Output() textFilterOnPage: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  public changeHandler() {
    this.current = event.target;
    if ('name' in this.current) { this.currentName = this.current.name; }
    switch (this.currentName) {
      case 'filter-box': this.filterBoxChanged(this.current.value); break;
      case 'items-count': this.itemsCountChanged(this.current.value); break;
      default: return false;
    }
  }

  private filterBoxChanged(value) {
    this.textFilterOnPage.emit(String(value));
  }

  private itemsCountChanged(value) {
    this.itemsCountOnPage.emit(Number(value));
  }

}
