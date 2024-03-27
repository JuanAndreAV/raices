import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Infopage } from '../interfaces/info-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  information: Infopage = {};
  cargada = false
  constructor( private http: HttpClient) {

    

    console.log("info pagina listo");
    //leer archivo JSON, haciendo peticiones http. 
    //http para leer mi archivo json
    this.http.get('assets/data/info-pagina.json')
      .subscribe( (res: Infopage) => {//este subscribe recibirá la respuesta
       this.cargada = true;
       this.information = res;
       console.log(this.information.email)
       console.log(this.information)
       console.log(this.information.facebook)
      });


   }
}
