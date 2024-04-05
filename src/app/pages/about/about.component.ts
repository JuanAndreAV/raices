import { Component } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor( public infoPage: InfoPageService){ //para traer la informacion recibida en el servicio InfoPageService

  }
}
