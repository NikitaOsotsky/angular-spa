import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpService} from './http.service';

@Injectable()
export class HnResolver implements Resolve<any> {
  private data: any;
  constructor(private httpService: HttpService) {
    console.log(this); }

  resolve(route: ActivatedRouteSnapshot) {
    console.log(route);
    const name: string = route.routeConfig.path;
    this.httpService.getData(name).subscribe((data: Array<object>) => {
      this.data = data;
    });
    return this.data || this.httpService.getData(name);
  }
}
