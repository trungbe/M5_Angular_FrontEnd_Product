import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IProduct} from '../iproduct';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {ICategory} from '../icategory';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  sub: Subscription;
  id: number;
  categories: ICategory[]=[]

  product: IProduct = {
    id: 0,
    name: 'sp demo',
    description: 'mota hay',
    category:{
      id:-1,
    }
  };

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private productService: ProductService,
              private categoryService: CategoryService,) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProductById(this.id);
    });
  }

  ngOnInit(): void {
    this.getAllCategories()
  }

  // tslint:disable-next-line:typedef
  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(product => {
      // @ts-ignore
      this.product = product;
    });
  }

  getAllCategories(){
    this.categoryService.getAllCategory().subscribe(categories=>{
      this.categories = categories;
    })
  }
  // tslint:disable-next-line:typedef
  update() {
    this.productService.update(this.product.id, this.product).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
