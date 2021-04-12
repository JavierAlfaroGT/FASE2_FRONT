import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistageneralComponent } from './components/vistageneral/vistageneral.component';
import { Vista1Component } from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';
import{ Fase2Service} from './services/fase2.service';
import { SigupComponent } from './components/sigup/sigup.component';
import { SiginComponent } from './components/sigin/sigin.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AdminComponent } from './components/admin/admin.component'//aqui pido los datos

import{AuthGuard} from './auth.guard'//validador de links

//fase 3

import {FormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    VistageneralComponent,
    Vista1Component,
    Vista2Component,
    SigupComponent,
    SiginComponent,
    ClienteComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule//fase 3
    
  ],
  providers: [
    Fase2Service,
    AuthGuard//fase 3
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

