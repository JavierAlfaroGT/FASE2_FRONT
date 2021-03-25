import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistageneralComponent } from './components/vistageneral/vistageneral.component';
import { Vista1Component } from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';
import{ Fase2Service} from './services/fase2.service'//aqui pido los datos

@NgModule({
  declarations: [
    AppComponent,
    VistageneralComponent,
    Vista1Component,
    Vista2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    Fase2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

