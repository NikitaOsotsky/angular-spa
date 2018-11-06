import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { SpinService } from '../shared/spin/spin.service';

@Injectable({providedIn: 'root'})
export class NoopInterceptor implements HttpInterceptor {
  constructor(private SpService: SpinService) {
    this['instance'] = Date.now(); /*test*/
    console.log(this);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.params.hasOwnProperty('needSpinner') && req.params['needSpinner']) {
      this.SpService.activateModalSpinner();
    }
    return next.handle(req);
  }
}
