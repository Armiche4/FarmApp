import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from "@angular/router";
import { AuthService } from './auth.service';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router,private AFauth : AuthService,private alerta : AlertController) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
    
    let authInfo = {
      
            authenticated: false
    };
if(this.AFauth.isLoggedIn==true){
  authInfo.authenticated==true;
}
this.showAlert(" " +this.AFauth.isLoggedIn);

    if (!authInfo.authenticated) {
     //this.router.navigate(["prueba"]);
      this.router.navigateByUrl('');
      return false;
    }

    return true;
  }

  async showAlert(mensaje: string){
    let alert= await this.alerta.create({
    header: 'Que haces',
    message:'Logeate primero '+ mensaje,
    buttons: ['OK']
    
    });
    alert.present();
      }
  


}



