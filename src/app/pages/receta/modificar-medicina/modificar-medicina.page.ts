import { Component, OnInit,NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetaService } from 'src/app/receta/receta.service';
import{Receta} from "../receta.model";
import{Medicamento}from "../usuario/medicamento.model"

@Component({
  selector: 'app-modificar-medicina',
  templateUrl: './modificar-medicina.page.html',
  styleUrls: ['./modificar-medicina.page.scss'],
})
export class ModificarMedicinaPage implements OnInit {

  constructor(private activated : ActivatedRoute,private recetaService: RecetaService , private router:Router,private ngZone:NgZone) {

    
   }

cn:number
cip;
medicina:Medicamento;
listaRecetas:any;
estaReceta:Receta;
verDatos:Boolean=false;

  ngOnInit() {

    this.activated.paramMap.subscribe(paramMap =>{
      this.cn = +paramMap.get('modificar-medicina');
      this.cip = paramMap.get('usuario');
      this.getAllUsers(this.cip);
   
    })
   
  }

  VerDatos(){
    this.verDatos=true;

  }


  Modificar(){
 

    console.log(this.estaReceta);
    this.actualizar(this.estaReceta._id,this.estaReceta);

this.router.navigate(['/receta']);
  }



   getAllUsers(cip:string) {
     this.recetaService.getAllUsers().subscribe((res) => {
       this.listaRecetas =  res;
      for(let i=0;i<this.listaRecetas.length;i++){
      
        if(this.listaRecetas[i].cip==cip){
         
           this.estaReceta=  this.listaRecetas[i];
           
          
        }
        
            }
          
           this.getMedicamento(this.cn);
           
    });
  }


  getMedicamento(cn:number){

    for(let i=0;i<this.estaReceta.medicamentos.length;i++){
      
      if(this.estaReceta.medicamentos[i].cn==cn){
       
         this.medicina=  this.estaReceta.medicamentos[i];
         
        
      }


  }

}

actualizar(id: string, receta: Receta) {
  this.recetaService.updateUser(id, receta).subscribe(
    () => {
    
      this.ngZone.run(() => this.router.navigateByUrl('/updateUser'));
    },
    (err) => {
      console.log(err);
    }
  );
}



}