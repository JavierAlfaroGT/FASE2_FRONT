//de aqui pido todo al back end
import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from'@angular/common/http'
import { AppComponent } from 'src/app/app.component';
import { Observable } from "rxjs";
import { Tiendas } from '../models/tiendas/tiendas'
@Injectable({
  providedIn: 'root'
})
export class Fase2Service {

  constructor(private http: HttpClient) { }

/*
getTiendas(){
  return this.http.get('http://localhost:3000/guardar')
  //this.http.post('')
}*/

CargaTiendas(txt){
  //document.getElementById("TIENDAS").innerText 
  console.log("***********************************************************************\n"+txt)
  var json = JSON.parse(txt);
  
  return this.http.post('http://localhost:3000/cargartienda',json )
  //this.http.post('')
}

CargaProductos(txt){
  //document.getElementById("TIENDAS").innerText 
  console.log("*********************************************************************\n"+txt)
  var json = JSON.parse(txt);
  
  return this.http.post('http://localhost:3000/cargarproductos',json )
  //this.http.post('')
}

CargaPedidos(txt){
  //document.getElementById("TIENDAS").innerText 
  console.log("***********************************************************************\n"+txt)
  var json = JSON.parse(txt);
  
  return this.http.post('http://localhost:3000/cargarpedidos',json )
  //this.http.post('')
}
/*
ObtenerInventario(){
  //document.getElementById("TIENDAS").innerText 
  //console.log("***********************************************************************\n"+txt)
  //var json = JSON.parse(txt);
  
  return this.http.get('http://localhost:3000/getArreglo')
  //this.http.post('')
}*/

getListaInventario():Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  return this.http.get<any>('http://localhost:3000/getHello', httpOptions);
}

ActualizarTiendas(txt){
  //document.getElementById("TIENDAS").innerText 
  console.log("********************************  UPDATE DE INVENTARIO 2   *****************************\n"+txt)
  var json = JSON.parse(txt);
  
  return this.http.post('http://localhost:3000/getHello2',json )
  //this.http.post('')
}

getListaReportes():Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  return this.http.get<any>('http://localhost:3000/getReportes', httpOptions);
}

getImagenAnyo():Observable<any>{
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  return this.http.get<any>('http://localhost:3000/getListaAnio', httpOptions);//devuelve el grafo de todos los anyos y meses juntos
}

getImagenAnyoUnica(txt){
  //document.getElementById("TIENDAS").innerText 
  console.log("********************************  get imagen unica   *****************************\n"+txt)
  var json = JSON.parse(txt);
  
  return this.http.post('http://localhost:3000/getListaAnio2',json )//devuelve el anyo y sus meses respectivos
  //this.http.post('')
}

getImagen(txt):Observable<any>{

  //return this.http.get<any>('http://localhost:3000/getMatrizD', httpOptions);
  console.log("********************************  get imagen   *****************************\n"+txt)
  var json = JSON.parse(txt);
  console.log(json)
  return this.http.post('http://localhost:3000/getMatrizD',json )//devuelve el anyo y sus meses respectivos
  //this.http.post('')

}

getCola(txt):Observable<any>{

  //return this.http.get<any>('http://localhost:3000/getMatrizD', httpOptions);
  console.log("********************************  obtener cola  *****************************\n"+txt)
  var json = JSON.parse(txt);
  console.log(json)
  return this.http.post('http://localhost:3000/getCola',json )//devuelve el anyo y sus meses respectivos
  //this.http.post('')

}

getImagenArbol(txt):Observable<any>{

  //return this.http.get<any>('http://localhost:3000/getMatrizD', httpOptions);
  console.log("********************************  get imagen arbol   *****************************\n"+txt)
  var json = JSON.parse(txt);
  console.log(json)
  return this.http.post('http://localhost:3000/getArbol',json )//devuelve el anyo y sus meses respectivos
  //this.http.post('')

}


//fase 3 ------------------------------------------------------------------------
CargaUsuarios(txt){
  //document.getElementById("TIENDAS").innerText 
  console.log("*********************************************************************\n"+txt)
  var json = JSON.parse(txt);
  
  return this.http.post('http://localhost:3000/cargarUsuarios',json )
  //this.http.post('')
}


loggedIn() {
  return !!localStorage.getItem('usuario');//me devuleve un true si existe este token usuario
  
}

loggedInAdmin() {
  var a = localStorage.getItem('usuario')
  console.log('>>>tipo de usuario alojado:'+a+'\n\n')

  if(a=='Admin'){

    //return localStorage.getItem('usuario');//me devuleve un true si existe este token usuario
    return true

  }else{return false}

  
  
}

loggedInCliente() {
  var a = localStorage.getItem('usuario')
  console.log('>>>tipo de usuario alojado:'+a+'\n\n')

  if(a=='Usuario'){

    //return localStorage.getItem('usuario');//me devuleve un true si existe este token usuario
    return true

  }else{return false}
}

CrearUsuarios(txt){
  //document.getElementById("TIENDAS").innerText 
  console.log("*********************************************************************\n"+txt)
  var json = JSON.parse(txt);
  
  return this.http.post('http://localhost:3000/crearUsuarios',json )
  //this.http.post('')
}


Login(txt){
  //document.getElementById("TIENDAS").innerText 
  console.log("*********************************************************************\n"+txt)
  var json = JSON.parse(txt);
  
  return this.http.post('http://localhost:3000/LogUsuarios',json )
  //this.http.post('')
}

normal="normal AB"
sensible="sensible AB"
full="full AB"

//obtener imagenes
getArbolNormal():Observable<any>{

  console.log("********************************  get imagen arbolB normal   *****************************\n")

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  return this.http.get<any>('http://localhost:3000/getArbolBN', httpOptions);//devuelve el grafo de todos los anyos y meses juntos

}

getArbolSensible():Observable<any>{

  console.log("********************************  get imagen arbolB sensible  *****************************\n")

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  return this.http.get<any>('http://localhost:3000/getArbolBS', httpOptions);//devuelve el grafo de todos los anyos y meses juntos

}

getArbolFull():Observable<any>{

  console.log("********************************  get imagen arbolB full   *****************************\n")

  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  return this.http.get<any>('http://localhost:3000/getArbolBF', httpOptions);//devuelve el grafo de todos los anyos y meses juntos

}



}
