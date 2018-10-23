import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService {
  private newsLink = 'http://172.20.132.174:3005/news';
  private menuLink = 'http://172.20.132.174:3005/menu';
  constructor(private http: HttpClient) { }

  public getData(componentName: string) {
    let url: string;
    switch (componentName) {
      case 'news': url = this.newsLink; break;
      case 'menu': url = this.menuLink; break;
      default: url = undefined;
    }
    return this.http.get(url);
  }
}
