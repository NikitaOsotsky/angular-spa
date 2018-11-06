import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class HttpService {
  private newsLink = 'http://172.20.132.174:3005/news';
  private menuLink = 'http://172.20.132.174:3005/menu';
  constructor(private http: HttpClient) { }

  public getData(componentName: string, needSpinner: boolean) {
    let url: string;
    switch (componentName) {
      case 'news': url = this.newsLink; break;
      case 'menu': url = this.menuLink; break;
      default: return;
    }

    const params = new HttpParams();
    params['needSpinner'] = needSpinner;
    return this.http.get(url, {params: params});
  }
}
