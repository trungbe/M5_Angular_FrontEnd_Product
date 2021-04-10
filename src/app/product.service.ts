import {Injectable} from '@angular/core';
import {IProduct} from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: IProduct[] = [
    {
      id: 1,
      name: 'iphone',
      description: 'xin'
    },
    {
      id: 2,
      name: 'samsung',
      description: 'cung dc'
    },
    {
      id: 3,
      name: 'sony',
      description: 'net nhu sony'
    },
    {
      id: 4,
      name: 'gang tay',
      description: 'am ap'
    }
  ];

  getAllProduct(): IProduct[] {
    return this.products;
  }

  // tslint:disable-next-line:typedef
  getProductById(id: number) {
    return this.products[id - 1];
  }

  // tslint:disable-next-line:typedef
  update(id: number, p: IProduct) {
    this.products[id - 1] = p;
  }

  // tslint:disable-next-line:typedef
  create(product: IProduct) {
    product.id = this.products.length + 1;
    this.products.push(product);
  }

  // tslint:disable-next-line:typedef
  delete(id: number) {
    this.products.splice(id - 1, 1);
  }

  constructor() {
  }
}
