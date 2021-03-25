import { Component } from '@angular/core';
import{Fase2Service}from './services/fase2.service'
//import { Tiendas } from './models/tiendas/tiendas'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



//ListaDeTiendasInventario: Tiendas[] = []
  /*
  title = 'prueba';
  tiendasstr = "tiendas ^-^"
  productosstr = "productos (*o*)"
  pedidosstr = "pedidos TuT"


  txtTiendas = ""//texto q envio a golang

  file: any;
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
      }
      if (tipo == 2) { 
        document.getElementById("PRODUCTOS").innerText = this.txtTiendas 
      }
      if (tipo == 3) { 
        document.getElementById("PEDIDOS").innerText = this.txtTiendas
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

      default:
        break;
    }
  }
*/
}
