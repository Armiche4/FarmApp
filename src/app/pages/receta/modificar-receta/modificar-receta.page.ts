import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RecetaService } from 'src/app/receta/receta.service';
import { Receta } from '../receta.model';


@Component({
  selector: 'app-modificar-receta',
  templateUrl: './modificar-receta.page.html',
  styleUrls: ['./modificar-receta.page.scss'],
})
export class ModificarRecetaPage implements OnInit {
  cip: string;
  medicinas=[];
receta:Receta;
updateForm: FormGroup;
  constructor(private activated : ActivatedRoute,private recetaService: RecetaService , private router:Router,private ngZone:NgZone) { 
       
    this.cip = this.activated.snapshot.paramMap.get('usuario');

    this.getAllUsers(this.cip);
    
   }


  ngOnInit() {



  
/*
    this.receta=this.recetaService.getReceta(this.cip);
    this.medicinas=this.receta.medicamentos
    console.log(this.medicinas);



		this.crudService.GetBook(this.getId).subscribe((res) => {
			this.updateForm.setValue({
				name: res['name'],
				price: res['price'],
				description: res['description']
			});
		});
*/
  }

  getAllUsers(cip:string) {
    this.recetaService.getAllUsers().subscribe((res) => {
      let ListaRecetas:any = res;
      for(let i=0;i<ListaRecetas.length;i++){
if(ListaRecetas[i].cip==cip){

  this.receta=ListaRecetas[i];

}
      }
  
    });
  }



  modificarRegistro(){
    this.actualizar(this.receta._id,this.receta);


this.router.navigate(['/']);

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
