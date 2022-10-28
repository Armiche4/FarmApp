import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecetaService } from 'src/app/receta/receta.service';
import {Receta} from"../receta/receta.model";
@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {





ListaRecetas!: any;


  constructor(private recetaService: RecetaService, private router: Router) { }

  ngOnInit() {
   
    this.getAllUsers()
  }


agregar(){
this.router.navigate(['/agregar']);
}



getAllUsers() {
  this.recetaService.getAllUsers().subscribe((res) => {
    this.ListaRecetas = res;
    

  });
}


}
