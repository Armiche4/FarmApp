import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SuministrosService } from 'src/app/services/suministros.service';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  medicamentos = [];

  medicamento: any ;


  constructor(private http: HttpClient, private activated : ActivatedRoute,private servicio :SuministrosService) { }

  ngOnInit() {
    this.servicio.initializeItems();
    this.activated.paramMap.subscribe(paramMap =>{
     const cn = paramMap.get('cn');
        this.medicamento =this.servicio.getSuministro(cn);
    
    
    })
  }



}
