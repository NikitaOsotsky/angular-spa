import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpService} from './http.service';

@Injectable()
export class HnResolver implements Resolve<any> {
  private data: any;
  constructor(private httpService: HttpService) {
 }

  resolve(route: ActivatedRouteSnapshot) {
    const name: string = route.routeConfig.path;
    this.httpService.getData(name, false).subscribe((data: Array<object>) => {
      this.data = data;
    });
    return this.data || this.httpService.getData(name, true);
  }
}
