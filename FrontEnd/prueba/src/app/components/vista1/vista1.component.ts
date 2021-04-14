import { Component, OnInit } from '@angular/core';
import{Fase2Service}from 'src/app/services/fase2.service'
import{Tiendas} from '../../models/tiendas/tiendas'
import { Router } from '@angular/router'

@Component({
  selector: 'app-vista1',
  templateUrl: './vista1.component.html',
  styleUrls: ['./vista1.component.css']
})
export class Vista1Component implements OnInit {
  title = 'prueba';

  tiendasstr = "tiendas ^-^"
  productosstr = "productos (*o*)"
  pedidosstr = "pedidos TuT"
  usuariosstr="usuarios -_-"
  grafosstr="grafos xd"
 
  




    imageBase64F3C:string="iVBORw0KGgoAAAANSUhEUgAAAFkAAABQCAYAAAByBNlnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTc2OUE2M0JDNDEyMTFFOTk3NjdCQzlCN0JBQ0RFNzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTc2OUE2M0NDNDEyMTFFOTk3NjdCQzlCN0JBQ0RFNzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NzY5QTYzOUM0MTIxMUU5OTc2N0JDOUI3QkFDREU3OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NzY5QTYzQUM0MTIxMUU5OTc2N0JDOUI3QkFDREU3OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk92008AADdWSURBVHjatF0HfFRV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"


  txtTiendas = ""//texto q envio a golang

  file: any;


  newUser={
    email:"",
    password:"",
    nombre:"",
    dpi:0
  }












  constructor(private fase2service:Fase2Service,private router: Router) { }

  ngOnInit() {
    
  }


  fileChanged(e, tipo) {
    this.file = e.target.files[0];
    this.uploadDocument(this.file, tipo)
  }

  uploadDocument(file, tipo) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.txtTiendas = fileReader.result.toString()

      console.log(this.txtTiendas);
      console.log(tipo);
      var div2 = document.getElementById('TIENDAS');
     
      if (tipo == 1) {//dentro de aqui llamo a las urls de postman que sean this.txtTiendas envio a golang
        document.getElementById("TIENDAS").innerText = this.txtTiendas
        var alfa = this.fase2service.CargaTiendas(this.txtTiendas)
        .subscribe(
          res=>{
            console.log(res)
          },
          err=>console.log(err)
        )
        //console.log("volvio de go:\n"+alfa)
      }
      if (tipo == 2) { 
        document.getElementById("PRODUCTOS").innerText = this.txtTiendas 
        var alfa = this.fase2service.CargaProductos(this.txtTiendas)
        .subscribe(
          res=>{
            console.log(res)
          },
          err=>console.log(err)
        )
        //console.log("volvio de go:"+alfa)
      }
      if (tipo == 3) { 
        document.getElementById("PEDIDOS").innerText = this.txtTiendas
        var alfa = this.fase2service.CargaPedidos(this.txtTiendas)
        .subscribe(
          res=>{
            console.log(res)
          },
          err=>console.log(err)
        )
        //console.log("volvio de go:"+alfa)
       }

       if (tipo == 4) { 
        // console.log("JIMMY NEWTRON")
        document.getElementById("USUARIOS").innerText = this.txtTiendas 
        var alfa = this.fase2service.CargaUsuarios(this.txtTiendas)
        .subscribe(
          res=>{
            console.log(res)
          },
          err=>console.log(err)
        )
        //console.log("volvio de go:"+alfa)
         }

         if (tipo == 5) { 
          // console.log("JIMMY NEWTRON")
          document.getElementById("GRAFOS").innerText = this.txtTiendas 
          var alfa = this.fase2service.CargaGrafo(this.txtTiendas)
          .subscribe((dataList: any)=>{
              console.log(dataList)
              this. imageBase64F3C = dataList
            },
            err=>console.log(err)
          )
          //console.log("volvio de go:"+alfa)
           }

    }
    fileReader.readAsText(this.file);
  }


  Mensaje(n) {


    switch (n) {
      case "tiendas ^-^":
        alert("seleccione JSON tiendas")
        console.log(n)
        break;
      case "productos (*o*)":
        alert("seleccione JSON productos")
        console.log(n)
        break;
      case "pedidos TuT":
        alert("seleccione JSON pedidos")
        console.log(n)
        break;
        case "usuarios -_-":
          alert("seleccione JSON usuarios")
          console.log(n)
          break;

      default:
        break;
    }
  }


  longOut(){
    localStorage.clear()//limpio porq inicio como cliente
    alert("Ha cerrado sesion, Adios!")
    //this.router.navigate(['/home'])
  }


  BorrarUsuario(){
    var valeria = "{ \"Nombre\":\""+this.newUser.nombre+"\",\"Dpi\":"+this.newUser.dpi+"}"

    //ACTUALIZE LOS Q SE PUDIERON COMPRAR
this.fase2service.BorrarUsuario(valeria)
.subscribe(
  (res: any) => {
    console.log(res)

    if (res==true){
          //esperar confirmacion del back para acceder
          alert("Usuario borrado")          
    }


  },
  err => console.log(err)
)

  }


}

