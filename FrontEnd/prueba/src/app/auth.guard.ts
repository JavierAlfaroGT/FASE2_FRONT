import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

import{Fase2Service} from './services/fase2.service'


//SOLO SOY UN EJEMPLO.......................

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private fase2service:Fase2Service,private router: Router){}

  canActivate(){

      if(this.fase2service.loggedIn()){
        return true
      }


      this.router.navigate(['/home'])
      return false

   
  }
  
}
