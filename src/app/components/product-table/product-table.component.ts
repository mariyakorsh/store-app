import { Component, OnInit, Output } from '@angular/core';
import { ValueService } from '../../services/values.service';
import Product from 'src/app/models/product.model';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  public products: Product[];
  public checkedProducts: Product[] = [];
  public summary = 0;
  constructor(private valueService: ValueService) {}

  @Output() changeCount = new EventEmitter<Number>();

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
      const prices = this.checkedProducts.map(p => p.price);
      this.summary = +prices.reduce((summ, price) => summ + price, 0).toFixed(2);
    };
  }

  AddToCart() {
    this.products = this.products.filter((product) => {
      return !this.checkedProducts.includes(product);
    });
    this.changeCount.emit(this.checkedProducts.length);
  }

  getColorRow(product: Product, index: number): string {
    if (this.checkedProducts.includes(product)) {
      return 'checkedRow';
    }
    return index % 2 === 0 ? 'evenRow' : 'oddRow';
  }
}
