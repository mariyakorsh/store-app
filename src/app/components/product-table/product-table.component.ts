import { Component, OnInit, Output } from '@angular/core';
import { ValueService } from '../../services/values.service';
import { EventEmitter } from '@angular/core';
import Value from 'src/app/models/value.model';
import ViewValue from 'src/app/models/viewValue.model';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  public values: ViewValue[] = [];
  public checkedValues: ViewValue[] = [];
  public summary = 0;
  constructor(private valueService: ValueService) {}

  @Output() changeCount = new EventEmitter<Number>();

  ngOnInit() {
   this.valueService.getValues().subscribe((data: Value[]) => {
     this.values = this.normalizeValue(data);
   });
  }

  checkProduct(value: ViewValue): Function {
    return () => {
      if (!this.checkedValues.includes(value)) {
          this.checkedValues.push(value);
      } else {
        this.checkedValues = this.checkedValues.filter((item) => {
          return item !== value;
        });
      }
      const prices = this.checkedValues.map(p => p.price);
      this.summary = +prices.reduce((summ, price) => summ + price, 0).toFixed(2);
    };
  }

  AddToCart() {
    this.values = this.values.filter((value) => {
      return !this.checkedValues.includes(value);
    });
    this.changeCount.emit(this.checkedValues.length);
  }

  getColorRow(value: ViewValue, index: number): string {
    if (this.checkedValues.includes(value)) {
      return 'checkedRow';
    }
    return index % 2 === 0 ? 'evenRow' : 'oddRow';
  }

  normalizeValue(values: Value[]): ViewValue[] {
    let normalizedValues = [];
    values.forEach(value => {
      const groupName = value.group.name;
      const productsInGroup = value.skus.map(product => {
        return {...product, groupName};
      });
      normalizedValues = normalizedValues.concat(productsInGroup);
    });
    return normalizedValues;
  }
}
