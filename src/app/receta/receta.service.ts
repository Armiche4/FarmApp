import { Injectable } from '@angular/core';
import { Receta } from '../pages/receta/receta.model';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import{Medicamento} from "../pages/receta/usuario/medicamento.model";

import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private recetas:Receta[] =[
/*{
    cip: "GMNH91040414912013",
foto:'https://elperiodicodeycodendaute.es/wp-content/uploads/2020/03/tarjeta-sanitaria.jpg',
nombre:'Guillermo Maceiras',
medicamentos:[{
  nombre:'paracetamol 500',
  cn:671346,
  foto:'https://i.blogs.es/e5556d/1366_2000/1366_2000.jpg'
},
{
  nombre:'ibuprofeno 500 mg',
  cn:123456,
  foto:'https://image.freepik.com/foto-gratis/pastilla-transparente_23-2148021387.jpg'
}  
]
  },{

    cip: "GMNH910404149120999",
foto:'https://elperiodicodeycodendaute.es/wp-content/uploads/2020/03/tarjeta-sanitaria.jpg',
nombre:'PEPON Maceiras',
medicamentos:[{
  nombre:'paracetamol 500',
  cn:678901,
  foto:'https://i.blogs.es/e5556d/1366_2000/1366_2000.jpg'
},
{
  nombre:'ibuprofeno 500',
  cn:678900,
  foto:'https://i.blogs.es/e5556d/1366_2000/1366_2000.jpg'
}  
]
  },{

    cip: "GMNH91040414912034",
foto:'https://elperiodicodeycodendaute.es/wp-content/uploads/2020/03/tarjeta-sanitaria.jpg',
nombre:'Sin Nada',
medicamentos:[]  
  }
  */
  ]

  //REST_API: string = 'http://localhost:8080/api'; 

  REST_API: string ="https://backfarmacia.herokuapp.com/api";
  //'https://p3-lucatic.herokuapp.com/api';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    let API_URL = `${this.REST_API}/display`;
    return this.httpClient.get(API_URL).pipe(
      catchError(this.handleError)
    )
  }

  adduser(user: Receta) {
    let API_URL = `${this.REST_API}/adduser`;
    return this.httpClient
      .post(API_URL, user) .pipe(
        catchError(this.handleError)
      )
    ;
  }

  updateUser(id: any, data: any) {
    let API_URL = `${this.REST_API}/updateUser/${id}`;
    return this.httpClient
      .put(API_URL, data, { headers: this.httpHeaders }) .pipe(
        catchError(this.handleError)
      )
     
  }
  GetReceta(id:any) {

    let API_URL = `${this.REST_API}/CogerReceta/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
    //transforma los datos recividos
      .pipe(map((res: any) => {
          return res || {}
        }) ,
        catchError(this.handleError)    
      )
     
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  deleteReceta(id:any) {
    let API_URL = `${this.REST_API}/delete-receta/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
 

  getRecetas(){
    return[...this.recetas]
  }

  addReceta(cip:string,nombre:string,foto:string){
    this.recetas.push({
      cip: cip,
      foto:foto,
      nombre:nombre,
      _id:cip
    //medicamentos:[]  
    })

  }

  borrarReceta(cip:string){
    this.recetas= this.recetas.filter(receta=>{
      return receta.cip!==cip
    })
  }

  getReceta(cip: string){
   
    return{
...this.recetas.find(receta=>{
  return receta.cip===cip})
    }
  }
addMedicina(cip: string, cn:number,nombre:string,foto:string){
 const receta= this.recetas.find(receta=>{return receta.cip===cip});

 receta.medicamentos.push({
cn:cn,
nombre:nombre,
foto:foto,

 })

}

deleteMedicina(cip: string ,cn: number){
  const receta= this.recetas.find(receta=>{return receta.cip===cip});


 
  for( let i = 0; i < receta.medicamentos.length; i++){ 
    
    if ( receta.medicamentos[i].cn === cn) { 

      receta.medicamentos.splice(i, 1); 
    }

}


}

getMedicina(cip: string, cn:number){
  const receta= this.recetas.find(receta=>{return receta.cip===cip});

  const medicina= receta.medicamentos.find(medicina=>{return medicina.cn==cn})
 
  return medicina;
 }


  

}
