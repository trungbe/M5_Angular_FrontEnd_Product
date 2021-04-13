import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


const API_URL = `${environment.apiUrl}`;

const URL_SHOW = API_URL + '/products';

const URL_CREATE = API_URL + '/products/create';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

//Observable: bất đồng bộ , DP,
  getAllProduct(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(URL_SHOW);
  }

  getProductById(id: number): Observable<IProduct> {
    const URL_FIND_ID = API_URL + `/products/${id}`;
    return this.httpClient.get<IProduct>(URL_FIND_ID);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(URL_CREATE, product);

  }

  update(id: number, product: IProduct): Observable<IProduct> {
    const URL_UPDATE = API_URL + `/products/edit/${id}`;
    return this.httpClient.put<IProduct>(URL_UPDATE, product);
  }

  delete(id: number): Observable<IProduct> {
    const URL_DELETE = API_URL + `/products/delete/${id}`;
    return this.httpClient.delete<IProduct>(URL_DELETE);
  }


}
