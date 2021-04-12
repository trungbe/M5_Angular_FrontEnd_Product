import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {ICategory} from './icategory';
const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  getAllCategory(): Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>(API_URL + '/category')
  }
}
