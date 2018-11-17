import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../services/values.service';
import Product from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  public products: Product[];
  public checkedProducts: Product[] = [];
  constructor(private valueService: ValueService) {}

  ngOnInit() {
   this.products = this.valueService.getValues();
   console.log(this.products);
  }

  checkProduct(product: Product): Function {
    return () => {
      if (!this.checkedProducts.includes(product)) {
          this.checkedProducts.push(product);
      } else {
        this.checkedProducts = this.checkedProducts.filter((item) => {
          return item !== product;
        });
      }
      console.log(this.checkedProducts);
    };
  }

  AddToCart() {
    this.products = this.products.filter((product) => {
      return !this.checkedProducts.includes(product);
    });
  }
}
