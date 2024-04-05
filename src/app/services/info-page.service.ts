import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Infopage } from '../interfaces/info-interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {
  information: Infopage = {}; //interface  infopage creada en app/interfaces
  cargada = false;
  equipo: any[] = [];
  constructor( private http: HttpClient) {

    

    console.log("info pagina listo");
    //leer archivo JSON, haciendo peticiones http. 
    //http para leer mi archivo json
    this.cargarInfo()
    this.cargarEquipo()
    
   }
   private cargarInfo(){
    this.http.get('assets/data/info-pagina.json')
      .subscribe( (res: Infopage) => {//este subscribe recibirá la respuesta
       this.cargada = true;
       this.information = res;
       console.log(this.information.email)
       console.log(this.information)
       console.log(this.information.facebook)
      });
   }

   private cargarEquipo(){
    this.http.get('https://angular-raices-default-rtdb.firebaseio.com/nosotros.json')
    .subscribe((res: any)=>{
      this.equipo = res 
      console.log(this.equipo)
    })

   }
}
