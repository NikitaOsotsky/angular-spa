import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable()
export class HnResolver implements Resolve<Observable<string>> {
  constructor() {}

  resolve() {
    alert();
    return of('Resolver works!');
  }
}
