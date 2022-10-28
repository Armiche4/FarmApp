import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';





const routes: Routes = [
 
  //,canActivate : [GuardiasGuard]
  //canActivate: [AuthGuardService]
  //{ path: 'prueba', loadChildren: './pages/prueba/prueba.module#PruebaPageModule' ,},
   { path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'prueba',children: [{
    path:"",
    loadChildren: './pages/prueba/prueba.module#PruebaPageModule' ,
  },{
    path:":cn",
    loadChildren: './pages/prueba/detalles/detalles.module#DetallesPageModule'
  }
] },
  { path: 'buscarcn', loadChildren: './pages/buscar-cn/buscar-cn.module#BuscarCNPageModule' },

  { path: 'receta',children: [{
    path:"", 
    loadChildren: './pages/receta/receta.module#RecetaPageModule' ,
  }, { 
    path: ":usuario",children:[{
      path:"",
      loadChildren: './pages/receta/usuario/usuario.module#UsuarioPageModule' },
      { path: 'modificar-receta', loadChildren: './pages/receta/modificar-receta/modificar-receta.module#ModificarRecetaPageModule' },
      { path: 'agregar-medicina', loadChildren: './pages/receta/agregar-medicina/agregar-medicina.module#AgregarMedicinaPageModule' },
      { path: ':modificar-medicina', loadChildren: './pages/receta/modificar-medicina/modificar-medicina.module#ModificarMedicinaPageModule' },

      ]
    }, 
  ]},

  { path: 'agregar', loadChildren: './pages/receta/agregar/agregar.module#AgregarPageModule' },
  { path: 'dia-cerca',children: [{
    path:"", 
    loadChildren: './pages/dia-cerca/dia-cerca.module#DiaCercaPageModule' ,
  }, { 
    path: ":location", loadChildren: './pages/dia-cerca/location/location.module#LocationPageModule' }]},
  { path: 'mapa-farmacias', loadChildren: './pages/mapa-farmacias/mapa-farmacias.module#MapaFarmaciasPageModule' },


 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
