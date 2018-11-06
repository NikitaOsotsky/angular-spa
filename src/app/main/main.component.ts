import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Output() error: EventEmitter<any> = new EventEmitter();
  constructor() { }

  errorHandler(event: any) {
    this.error.emit(event);
  }

  ngOnInit() {
  }

}
