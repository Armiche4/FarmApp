import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SuministrosService } from 'src/app/services/suministros.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit  {

  medicamentos :any;

  constructor(private http: HttpClient ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.initializeItems() 
      
  }

  initializeItems() {
    this.http.get<any>('https://cima.aemps.es/cima/rest/psuministro').subscribe(res => {
      console.log(res);
      this.medicamentos = res.resultados;
    });

  }

  getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;


    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.medicamentos = this.medicamentos.filter((medicamento) => {
        return (medicamento.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    if (val && val.trim() == '') {
      this.initializeItems();

    }
  }

  }






