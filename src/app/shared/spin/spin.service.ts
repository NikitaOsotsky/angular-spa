import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SpinService {
  @Output() componentData: EventEmitter<any> = new EventEmitter();
  constructor() {
    this['instance'] = Date.now(); /*test*/
    console.log(this); /*test*/
  }
  public activateModalSpinner () {
    this.componentData.emit(true);
  }

  public disActivateModalSpinner () {
    this.componentData.emit(false);
  }
}
