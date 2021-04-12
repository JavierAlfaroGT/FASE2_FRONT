import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistageneralComponent} from './components/vistageneral/vistageneral.component';
import { Vista1Component} from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';

//fase 3
import{AuthGuard} from './auth.guard'//validador de links
import{Auth2Guard} from './auth2.guard'//validador de links
import{Auth3Guard} from './auth3.guard'//validador de links



import {AdminComponent} from './components/admin/admin.component'
import {ClienteComponent} from './components/cliente/cliente.component'
import {SiginComponent} from './components/sigin/sigin.component'
import {SigupComponent} from './components/sigup/sigup.component'



const routes: Routes = [
  {
    path: '',                 //cuando esta asi es mi ruta inicial
    redirectTo: '/home',
    pathMatch: 'full'      
    },
    {
      path: 'reportes',
      component: VistageneralComponent, //autenticar admin
      canActivate:[Auth2Guard]
      //si 
    
    },
      {
        path: 'Admin',
        component: Vista1Component, //autenticar admin
        canActivate:[Auth2Guard]
        
      },
      {
        path: 'tiendas',
        component: Vista2Component, //autenticar cliente
        canActivate:[Auth3Guard]
      }
      ,
       {
        path: 'home',
        component: SiginComponent
      }
      ,
       {
        path: 'createUsser',
        component: SigupComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

