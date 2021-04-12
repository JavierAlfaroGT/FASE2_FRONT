import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router'

import{Fase2Service} from './services/fase2.service'

//SOLO SOY PARA CUANDO SEA UN ADMIN SOLO ESTE PUEDE ACCEDER AHI

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {

  constructor(private fase2service:Fase2Service,private router: Router){}


  canActivate(){


    if(this.fase2service.loggedInAdmin()){
      return true
    }


    //this.router.navigate(['/tiendas'])
    return false
  }
  
}
