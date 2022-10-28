import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuministrosService {
  medicamentos = [];

  constructor(private http: HttpClient) { 
    this.initializeItems();
  }

  initializeItems() {
    this.http.get<any>('https://cima.aemps.es/cima/rest/psuministro').subscribe(res => {
      
      this.medicamentos = res.resultados;
    });
   for(var i=0; i<this.medicamentos.length;i++){
    var posicion
    for(var j=0;j< this.medicamentos[i].nombre.length;j++){
      if(this.medicamentos[i].nombre.charAt(j)===" "){
              posicion=j;
        j=this.medicamentos[i].nombre.length;
      }
    }
    this.medicamentos[i].completo=this.medicamentos[i].nombre
     this.medicamentos[i].nombre=this.medicamentos[i].nombre.substring(0,posicion);
   }
  }


  getSuministros(){
return[...this.medicamentos]
  }


  getSuministro(cn:string){
    return{
    ...this.medicamentos.find(medicamento=>{
     
    
      medicamento.fini =new Date( medicamento.fini).toLocaleDateString()

      medicamento.ffin =new Date( medicamento.ffin).toLocaleDateString()
     
     // medicamento.fini=Date.parse(medicamento.fini);

      return medicamento.cn === cn
    })
  }
  }


}
