import {Component, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    this.products = this.productService.getAllProduct();
  }

  // tslint:disable-next-line:typedef
  deleteProduct(id: number) {
    this.productService.delete(id);
  }

  ngOnInit(): void {
  }

}
