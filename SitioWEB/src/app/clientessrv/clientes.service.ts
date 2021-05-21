import { EventEmitter, Injectable } from '@angular/core';
import { Clientes } from '../shared/Clientes.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ClientesService {
    url_de_consulta: string =  "http://localhost:3000/api"; 
    rutaparams = "/NutriNet/Cliente/";
 

  recipeSelected = new EventEmitter<Clientes>();

  private recipes:[{
id:"",
name:""

  }];

  constructor( private http: HttpClient) {}

  getClientes() {
       
    return new Promise((res, rej) => {
      this.getApiInfoJson(this.url_de_consulta+ this.rutaparams).subscribe(data => {
                debugger;  
            res(data);
        }, () =>{
            rej("El directorio o archivo especificado no existe en el directorio web");
        });
    });
  }
    get_Clientes(id?:string):Observable<any> {
      if(id){
        return this.http.get(this.url_de_consulta  + this.rutaparams+ id ).pipe(map(res => res));
      }else{
        return this.http.get(this.url_de_consulta  + this.rutaparams ).pipe(map(res => res));
      }
    
  }

 


  getRecipe(index: number) {
    return this.recipes[index];
  }
  getInfoJson(url){
    const httpOptions = {
        headers: new HttpHeaders({
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Content-Type':  'application/json'                    
        })
    }
      
    return this.http.get(url, httpOptions);
}
getApiInfoJson (url){                 
  return this.http.get(url);
}

}
