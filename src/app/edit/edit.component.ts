import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IProduct} from '../iproduct';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  sub: Subscription;
  id: number;
  product: IProduct = {
    id: 0,
    name: 'sp demo',
    description: 'mota hay'

  };

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private productService: ProductService) {
    this.sub = this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getProduct(this.id);
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  getProduct(id: number) {
    this.product = this.productService.getProductById(id);
  }

  // tslint:disable-next-line:typedef
  update() {
    this.productService.update(this.id, this.product);
    this.router.navigate(['/']);
  }
}
