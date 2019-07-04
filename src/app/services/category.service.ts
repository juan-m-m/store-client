import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {baseURL} from '../shared/baseurl';
import {Category} from '../shared/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategorys(): Observable<Category[]> {
    // return Observable.of(ITEMS).delay(2000);
    return this.http.get(baseURL + 'categories') as Observable<Category[]>;
  }
}
