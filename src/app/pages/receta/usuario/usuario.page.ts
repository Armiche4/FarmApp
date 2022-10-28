import { Component, OnInit,NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetaService } from 'src/app/receta/receta.service';
import { Receta } from '../receta.model';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  constructor(private activated : ActivatedRoute, private recetaService: RecetaService,private router: Router,private alerta :AlertController,private ngZone:NgZone) {  
}

receta: Receta;
listaRecetas:any;

estaReceta:Receta;
cip;
  ngOnInit() {
    
    this.activated.paramMap.subscribe(paramMap =>{
      this.cip = paramMap.get('usuario');
      this.receta= this.recetaService.getReceta(this.cip);
       this.getAllUsers(this.cip);
  
    }) 

  
   
  }

async deleteUsuario(){
 const alertElement =await this.alerta.create({
  header:"¿Estas seguro que quieres borrar?",
buttons:[
  {
    text:"Cancelar",
    role: "cancel"
  },{
    text:"Borrar",
    handler:()=>{
     
      this.recetaService.deleteReceta(this.estaReceta._id).subscribe((res) => {
      
      })
       
      this.router.navigate(['/']);
    }
  }
]

});
  alertElement.present();
}







async deleteMedicamento(cn:number){
console.log(cn);
  const alertElement =await this.alerta.create({
    header:"¿Estas seguro que quieres borrar este medicamento de la receta?",
  buttons:[
    {
      text:"Cancelar",
      role: "cancel"
    },{
      text:"Borrar",
      handler:()=>{
        let listaNueva=[];
for(let i=0;i<  this.estaReceta.medicamentos.length;i++){
if(this.estaReceta.medicamentos[i].cn==cn){

console.log(cn);
}
else{
   listaNueva.push(this.estaReceta.medicamentos[i]);

}


}
this.estaReceta.medicamentos=listaNueva;   

        this.actualizar(this.estaReceta._id,this.estaReceta);
        this.router.navigate(['/receta']);
      }
    }
  ]
  
  });
    alertElement.present();


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



ModificarUsuario(cip){
  console.log(cip)
  console.log(this.estaReceta);
}




async getAllUsers(cip:string) {
  await this.recetaService.getAllUsers().subscribe((res) => {
     this.listaRecetas =  res;
    for(let i=0;i<this.listaRecetas.length;i++){

      if(this.listaRecetas[i].cip==cip){
         this.estaReceta=  this.listaRecetas[i];
      
      }
      
          }

  });
}



}
