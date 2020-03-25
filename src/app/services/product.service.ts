import { Injectable } from '@angular/core';
import { data } from '../MockData';
import { Product } from '../Product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
  products = data;
  api = 'https://5e7b6cc50e04630016333349.mockapi.io/'
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]>{
      return this.http.get<Product[]>(`${this.api}/product`);
  }
  getProduct(id) : Observable<Product[]>{
    return this.http.get<Product[]>(`${this.api}/product/${id}`);
  }
  removeProduct(id){
    return this.products = this.products.filter(product => product.id != id)
  }
}