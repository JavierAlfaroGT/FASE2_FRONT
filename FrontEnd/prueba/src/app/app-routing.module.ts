import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VistageneralComponent} from './components/vistageneral/vistageneral.component';
import { Vista1Component} from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';
const routes: Routes = [
  {
    path: '',                 //cuando esta asi es mi ruta inicial
    redirectTo: '/home',
    pathMatch: 'full'      
    },
    {
      path: 'reportes',
      component: VistageneralComponent
    },
      {
        path: 'home',
        component: Vista1Component
      },
      {
        path: 'tiendas',
        component: Vista2Component
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

