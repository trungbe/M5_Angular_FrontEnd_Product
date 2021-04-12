import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) {
  }

  // private products: IProduct[] = [
  //   {
  //     id: 1,
  //     name: 'iphone',
  //     description: 'xin'
  //   },
  //   {
  //     id: 2,
  //     name: 'samsung',
  //     description: 'cung dc'
  //   },
  //   {
  //     id: 3,
  //     name: 'sony',
  //     description: 'net nhu sony'
  //   },
  //   {
  //     id: 4,
  //     name: 'gang tay',
  //     description: 'am ap'
  //   }
  // ];
//Observable: bất đồng bộ , DP,
  getAllProduct(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(API_URL + '/products');
  }

  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(API_URL + `/products/${id}`);
  }

  create(product: IProduct): Observable<IProduct> {
    return this.httpClient.post<IProduct>(API_URL + '/products/create', product);

  }

  update(id: number, product: IProduct): Observable<IProduct> {
    return this.httpClient.put<IProduct>(API_URL+`/products/edit/${id}`,product)
  }

  delete(id: number): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(API_URL+`/products/delete/${id}`)
  }


}
