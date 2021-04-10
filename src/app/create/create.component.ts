import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {IProduct} from '../iproduct';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  product: IProduct = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private router: Router,
              private activeRouter: ActivatedRoute,
              private productService: ProductService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createNewProduct() {
    this.productService.create(this.product);
    this.router.navigate(['/']);
  }
}
