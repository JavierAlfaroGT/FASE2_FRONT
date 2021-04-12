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


  txtTiendas = ""//texto q envio a golang

  file: any;
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


}

