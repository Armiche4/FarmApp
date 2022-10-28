import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buscar-cn',
  templateUrl: './buscar-cn.page.html',
  styleUrls: ['./buscar-cn.page.scss'],

})
export class BuscarCNPage implements OnInit {

cn:string;
  medicamento ;
  show: boolean = false;

  constructor(private http: HttpClient ) { }

  ngOnInit() {
    
  }

  initializeItems() {
    console.log(this.cn.valueOf);
    var camino='https://cima.aemps.es/cima/rest/medicamento?cn='+this.cn;
    console.log(camino);
    this.http.get<any>(camino).subscribe(res => {
      console.log(this.cn);
      this.medicamento= res;
    });

  }

  onSubmit(f: NgForm) {
   
this.cn=f.value.cn;
this.show=true;
this.initializeItems();

  }

}
