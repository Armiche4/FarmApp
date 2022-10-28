import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetaService } from 'src/app/receta/receta.service';
import{Receta} from"../receta.model"

import{Medicamento} from"../../receta/usuario/medicamento.model"

@Component({
  selector: 'app-agregar-medicina',
  templateUrl: './agregar-medicina.page.html',
  styleUrls: ['./agregar-medicina.page.scss'],
})
export class AgregarMedicinaPage implements OnInit {
  ListaRecetas!:any ;
cip;

estaReceta:Receta;

  constructor(private activated : ActivatedRoute,private recetaService: RecetaService , private router:Router,  private ngZone: NgZone,) { }



  ngOnInit() {
    this.activated.paramMap.subscribe(paramMap =>{
       this.cip = paramMap.get('usuario');
       this.getAllUsers()
     })

     

  }

  nuevoRegistro(cn,nombre,foto){

let medicamento:Medicamento={

  nombre:nombre.value,
  cn:cn.value,
    foto:foto.value

}
console.log(medicamento);

this.estaReceta.medicamentos.push(medicamento);
console.log(this.estaReceta);
this.actualizar(this.estaReceta._id,this.estaReceta);

  // this.recetaService.addMedicina(this.cip,cn.value,nombre.value,foto.value);

//this.estaReceta.medicamentos.push()

  this.router.navigate(['/receta']);
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
  

getAllUsers() {
  this.recetaService.getAllUsers().subscribe((res) => {
    this.ListaRecetas = res;
    
    for(let i=0;i<this.ListaRecetas.length;i++){

if(this.ListaRecetas[i].cip==this.cip){
  this.estaReceta=this.ListaRecetas[i];

}

    }

  });
}

}
