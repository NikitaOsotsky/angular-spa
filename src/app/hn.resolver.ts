import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { HttpService } from './http.service';
import { SpinService } from './shared/spin/spin.service';

@Injectable()
export class HnResolver implements Resolve<any> {
  private data: any;
  constructor(private httpService: HttpService, private SpService: SpinService) {
 }

  resolve(route: ActivatedRouteSnapshot) {
    const name: string = route.routeConfig.path;
    this.httpService.getData(name, false).subscribe((data: Array<object>) => {
      this.data = data;
    });
    return this.data || this.httpService.getData(name, true).toPromise().then( (response: any) => {
      this.SpService.disActivateModalSpinner();
      return response;
    }).catch((error) => {
      console.log(error);
      this.SpService.disActivateModalSpinner();
      return [];
    });
  }
}
