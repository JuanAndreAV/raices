import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DescripcionProducto } from 'src/app/interfaces/product-description';
import { InfoPageService } from 'src/app/services/info-page.service';

import { ProductsService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {

  producto: DescripcionProducto = {}
  id?: string;

  constructor(private route: ActivatedRoute,
              public productoId: ProductsService,
              public info: InfoPageService,
             ){}
  ngOnInit(){
    this.route.params
    .subscribe( parametros =>{
      console.log("producto: "+parametros['id'])

      this.productoId.getProduct(parametros['id'])
      .subscribe((producto: DescripcionProducto) =>{
        
        console.log(producto)
        this.id = parametros['id']
        this.producto = producto

      });
    })
  }
}
