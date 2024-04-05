import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  producto: Product[] = [];
  carga = true;
  
  constructor(private http: HttpClient) { 
    this.products()
  }

  private products(){
    this.http.get('https://angular-raices-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((res: any )=>{
      this.producto = res
      console.log(this.producto)
      this.carga = false;
    })
  }
}
