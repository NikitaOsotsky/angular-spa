import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://172.20.132.174:3005/menu');
  }
}
