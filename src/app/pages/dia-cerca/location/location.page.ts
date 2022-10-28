import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  constructor(private activated : ActivatedRoute,private sanitizer: DomSanitizer) { }
coorX;
coorX1;
coorX2;
coorY;
coorY1;
coorY2;
  location;
  locationMarker;
  safeSrc: SafeResourceUrl;
   ngOnInit() {
    this.activated.paramMap.subscribe(paramMap =>{
      this.location = paramMap.get('location');
      this.locationMarker=this.location.replace(',','%2C')
      /*this.location= this.location.replace(',','/')
      this.coorX=this.location.substring(0,8);
     
      
     for (let i = 14; i <this.location.length ; i++) {
    
if(this.location.charAt(i)==='/'){
  this.coorY=this.location.substring(i+1,i+10);
}

     }

this.coorX1=+this.coorX-0.00097219323;
this.coorX2=+this.coorX+0.00097219323;
this.coorY1=+this.coorY-0.00097219323;
this.coorY2=+this.coorY+0.00097219323;
this.location=this.coorX+""+this.coorY;   
     */
      //const url="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q="+this.location+"+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp&output=embed"
//const url ="https://maps.google.com/?ll="+this.location+"&z=20&t=m&output=embed" ;// ESTE FUNCIONABA
//t=&z=17&ie=UTF8&iwloc=&output=embed
const url="https://www.google.com/maps/embed/v1/view?key=AIzaSyCbRSG9vWLgu27nYSpVrReC8dcXd01tSs8&center="+this.location+"&zoom=18";

//const url="https://www.openstreetmap.org/export/embed.html?bbox="+this.coorY2+"%2C"+this.coorX1+"%2C"+this.coorY1+"%2C"+this.coorX2+"&amp;layer=mapnik;marker=" +this.locationMarker;
 
   this.safeSrc=this.sanitizer.bypassSecurityTrustResourceUrl(url);
  
     });
     
  }
/*
<div style="width: 100%"><iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=28.4586979749,-16.2633210193+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
*/
 //href="https://www.openstreetmap.org/#map=19/31.23/30.05"

 //  <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" [src]="safeSrc"></iframe>

// <iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-16.263115704059604%2C28.46668944659822%2C-16.258636415004734%2C28.46863470844856&amp;layer=mapnik" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=19/28.46766/-16.26088">Ver mapa más grande</a></small>
}
