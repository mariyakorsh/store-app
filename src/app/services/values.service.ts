import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import getProducts from '../products.js';
import Product from '../models/product.model.js';
const URL = 'https://ssdev.superagent.ru/TestApp/swagger/#/Values/GetWithParent';

@Injectable()
export class ValueService {

  constructor(private http: HttpClient) { }

  getValues(): Product[] {
    //   return this.http.get(URL);
    return getProducts();
  }
}
