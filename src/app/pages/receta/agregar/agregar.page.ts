import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecetaService } from 'src/app/receta/receta.service';
import { NgZone } from '@angular/core';
import {Receta} from"../receta.model";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(private recetaService: RecetaService , private router:Router,  private ngZone: NgZone,) { }

  ngOnInit() {
    this.usuario = {} as Receta;
  }

  usuario!:Receta;

  nuevoRegistro(cip,nombre,foto){

  this.recetaService.addReceta(cip.value,nombre.value,foto.value);
this.router.navigate(['/receta']);
  }

  addUser() {
    
    this.recetaService.adduser(this.usuario).subscribe(
      () => {
        this.ngZone.run(() => this.router.navigateByUrl('/adduser'));
      },
      (err) => {
        alert('Email o password incorrectos!');
        console.log(err);
      }
    );
    this.router.navigate(['/']);
  }


}
