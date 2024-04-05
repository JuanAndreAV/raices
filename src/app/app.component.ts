import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProductsService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public _infoPageService: InfoPageService,
              public _products: ProductsService ){//el _ en infoPage indica que es un servicio, no es necesario.
    
  }
}
