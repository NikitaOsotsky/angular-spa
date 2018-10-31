import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public error: string;
  public spinnerStatus = false;
  constructor() {
  }
  ngOnInit() {
  }

  public errorHandler(event: any) {
    this.error = event.message;
  }
  public spinnerHandler(event: any) {
    this.spinnerStatus = event;
  }
}
