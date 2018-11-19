import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import Value from '../models/value.model';
const URL = 'https://ssdev.superagent.ru/TestApp/Values/GetWithParent';

@Injectable()
export class ValueService {
  value: Value[];

  constructor(private http: HttpClient) { }

  getValues(): Observable<Value[]> {
   return this.http.get<Value[]>(URL);
  }
}
