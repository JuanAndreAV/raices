import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(public infoPageService: InfoPageService,
            private router: Router){}//router para nevegación interna


buscar(event: Event){
  const input = event.target as HTMLInputElement;
  const busqueda = input.value; 
  if(busqueda.length < 1){
    return;
  }
  this.router.navigate(['/search',busqueda])
  console.log(busqueda)
}
}
