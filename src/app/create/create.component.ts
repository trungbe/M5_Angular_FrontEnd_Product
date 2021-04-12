import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from '../product.service';
import {IProduct} from '../iproduct';
import {CategoryService} from '../category.service';
import {ICategory} from '../icategory';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: IProduct = {
    id: 0,
    name: '',
    description: '',
    category: {
      id: -1,
    }
  };
  categories: ICategory[] = [];

  constructor(private router: Router,
              private productService: ProductService,
              private categoryService: CategoryService) {
    this.getAllCategories();
  }

  ngOnInit(): void {
  }

  createNewProduct() {
    this.productService.create(this.product)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(categories => {
      this.categories = categories;
    });
  }
}
