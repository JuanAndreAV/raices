import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  producto: Product[] = [];
  carga = true;
  filtroProducto: Product[] = []
  
  constructor(private http: HttpClient) { 
    this.products()
  }

  private products(){
    this.http.get('https://angular-raices-default-rtdb.firebaseio.com/productos_idx.json')
    .subscribe((res: any )=>{
      this.producto = res
      this.carga = false;
    });
  }
  getProduct(id: string){
    return this.http.get(`https://angular-raices-default-rtdb.firebaseio.com/productos/${ id }.json`)
  }
  searchProduct(articulo : string){
    this.filtroProducto = this.producto.filter( product => {
      return true;
    });

    console.log( this.filtroProducto)
  }
  

}
