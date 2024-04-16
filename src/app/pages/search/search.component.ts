import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor( private route: ActivatedRoute,
              public productsService: ProductsService
  ){}
 ngOnInit(){
  this.route.params
  .subscribe( params =>{
    console.log(params['articulo'])
   this.productsService.searchProduct(params['articulo'])
   let ver = this.productsService.searchProduct(params['articulo'])
  })
 }
  

}
