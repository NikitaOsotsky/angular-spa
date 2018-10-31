import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SpinService } from './spin.service';

@Component({
  selector: 'app-spin',
  templateUrl: './spin.component.html',
  styleUrls: ['./spin.component.css']
})
export class SpinComponent implements OnInit {
  @Output() isSpinnerActive: EventEmitter<any> = new EventEmitter();
  constructor( private SpService: SpinService ) {
    this['instance'] = Math.random();
  }

  ngOnInit() {
    console.log('init in spin.component', this); /*test*/
    this.SpService.componentData.subscribe((data) => {
      console.log('subscribe in spin.component', data); /*test*/
      this.changeSpinnerActivity(data);
    });
  }

  public changeSpinnerActivity(data: boolean) {
    this.isSpinnerActive.emit(data);
  }
}
