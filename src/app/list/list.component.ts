import {Component, OnInit} from '@angular/core';
import {IProduct} from '../iproduct';
import {ProductService} from '../product.service';
import {CategoryService} from '../category.service';
import {ICategory} from '../icategory';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  products: IProduct[] = [];
  categories: ICategory[] = [];

  constructor(private productService: ProductService, private categoryService: CategoryService) {
    this.getAll();
  }

  // tslint:disable-next-line:typedef
  getAll() {
    this.productService.getAllProduct().subscribe(product => {
      this.products = product;
    });
  }

  // tslint:disable-next-line:typedef
  deleteProduct(id: number) {
    if (confirm('Bạn có thực sự muốn xóa?')) {
      this.productService.delete(id).subscribe(
        next => {
          // @ts-ignore
          this.products = this.getAll();
        },
        error => {
          alert('Error');
        }
      );
    }
  }

  ngOnInit(): void {
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(categories => {
      this.categories = categories;
    });
  }
}
