import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fase2Service } from 'src/app/services/fase2.service'
import { Tiendas } from '../../models/tiendas/tiendas'

import { Carrito } from '../../models/carrito/carrito'
//import { bind } from '@angular/core/src/render3';

@Component({
  selector: 'app-vista2',
  templateUrl: './vista2.component.html',
  styleUrls: ['./vista2.component.css']

})
export class Vista2Component implements OnInit {

  boton: boolean = false;
  tab_count: number = 0;
  name: String;
  ItemC = 0
  cadenaZ = ""//nombre de producto actual
  condicion = false
  Carrito: Carrito[] = []

  hello//json q obtengo de backend
  TiendaSeleccionada = ""//nombre de la tienda actual a la q se le esta viendo sus productos
  ListaDeTiendasInventario: Tiendas[] = []//ORIGINAL DONDE DEBO RESTAR<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
  ListaDeTiendasInventario2: any[] = []//este es la lista de productos de una tienda en el modal
  Subtotal: number//total de valor en el carrito
  compraMala = false
  nameProductoF = ""
  constructor(private fase2service: Fase2Service) { }



  nuevaImagen() {
    this.boton = true;
  }



  totalCarrito() {
    this.Subtotal = 0
    this.Carrito.forEach(element => {
      this.Subtotal += element.cantidad * element.item.Precio
    });
  }

  Purchase() {//comprar
    this.Carrito.forEach(element => {//recorrer cada elemento del carrito 

      this.ListaDeTiendasInventario.forEach(original => {//recorro el inventario original
        if (original.Nombre == element.tienda) {

          original.ListaProductos.forEach(originalP => {//recorro la lista de productos de tienda en inventario original
            if (originalP.Nombre == element.item.Nombre) {
              if (originalP.Cantidad - element.cantidad >= 0) {//resto la cantidad en carrito con la de la bodega
                originalP.Cantidad -= element.cantidad
                this.ItemC -= element.cantidad

                //para quitar del carrito el producto q fue consumido correctamente
                for (let v = 0; v < this.Carrito.length; v++) {
                  if (element.item.Nombre == this.Carrito[v].item.Nombre) {// aqui ya encontre a la tienda ahora hallar el producto
                    this.Carrito.splice(v, 1);
                    this.totalCarrito()
                    //this.compraMala=false

                    //q se actualize en go la cantidad
                    var valeria = "{ \"Calificacion\":"+original.Calificacion+",\"Fila\":\""+original.Nombre[0]+"\",\"Columna\":\""+original.Departamento+"\",\"NombreTienda\":\""+original.Nombre+"\",\"CodigoItem\":"+originalP.Codigo+",\"Cantidad\":"+element.cantidad+"}"

                    //ACTUALIZE LOS Q SE PUDIERON COMPRAR
                    this.fase2service.ActualizarTiendas(valeria)
                      .subscribe(
                        res => {
                          console.log(res)
                        },
                        err => console.log(err)
                      )





                  }
                }

                //POST A GO PARA Q ACTUALIZE CANTIDADES

              } else {
                this.compraMala = true
                this.totalCarrito()
                this.nameProductoF = element.item.Nombre
              }

            }


          });

        }


      });

    });


    

    //si la compra fue totalmente exitosa
    //this.Carrito=[]
    //this.Subtotal = 0
    //this.ItemC = 0
  }
  compraMalaOff() { 
    alert("heureka")
    this.compraMala = !true 
        //hacer un post para que en el back mmmmm retorne el robot a su posicion original
        this.fase2service.cerrarPedido()
        .subscribe(
          res => {
            console.log(res)
          },
          err => console.log(err)
        )
  
  }

  ffff() {
    //ACTUALIZE LOS Q SE PUDIERON COMPRAR
    this.fase2service.ActualizarTiendas("{ \"dato\":1}")
      .subscribe(
        res => {
          console.log(res)
        },
        err => console.log(err)
      )
    console.log("********************************  UPDATE DE INVENTARIO   *****************************\n" + this.ListaDeTiendasInventario.toString())


  }
  descartar(producto) {
    this.compraMala = false
    //con esto quito el item del carrito
    this.Carrito.forEach(element => {
      if (producto == element.item.Nombre) {// aqui ya encontre a la tienda ahora hallar el producto
        //console.log(nombreP == element.item.Nombre)
        if (element.cantidad > 0) {
          element.cantidad--
          this.ItemC--
          this.totalCarrito()

          if (element.cantidad == 0) {//llego a 0 por lo q lo quito de la lsta
            for (let v = 0; v < this.Carrito.length; v++) {

              if (element.item.Nombre == this.Carrito[v].item.Nombre) {// aqui ya encontre a la tienda ahora hallar el producto
                this.Carrito.splice(v, 1);
                this.totalCarrito()
              }

            }

          }

        } else {//es negativa nunca llegara este caso

        }


      }

    });

  }


  verCantidadProducto(cadena) {

    this.ListaDeTiendasInventario.forEach(element => {
      if (this.TiendaSeleccionada == element.Nombre) {// aqui ya encontre a la tienda ahora hallar el producto

        element.ListaProductos.forEach(element2 => {
          if (element2.Nombre == cadena) {
            // console.log(">>" + "item: " + element2.Nombre + " precio: Q" + element2.Precio + " stock:" + element2.Cantidad + "\n")
            //si no existe en carrito lo meto else +1 en cantidad en carrito 
            // console.log("++"+cadena)
            if (this.VerInCarrito(cadena) == true) {
              //ya esta el producto en el carrito
              this.PlusOneInCarrito(cadena)
              console.log("meto repetido:" + element2.Nombre)
            } else {//es nuevo hay q meterlo
              var carritoItem = new Carrito(element2, this.TiendaSeleccionada)
              this.Carrito.push(carritoItem)
              console.log("meto nuevo:" + element2.Nombre)
            }
          }
        });
      }

    });

  }

  VerInCarrito(nombreP) {
    //console.log("????"+nombreP)
    var boost = false

    this.Carrito.forEach(element => {
      if (nombreP == element.item.Nombre) {// aqui ya encontre a la tienda ahora hallar el producto
        //console.log(nombreP == element.item.Nombre)
        //console.log(nombreP+"|"+element.item.Nombre)
        boost = true


      }

    });
    return boost

  }

  PlusOneInCarrito(nombreP) {
    this.Carrito.forEach(element => {
      if (nombreP == element.item.Nombre) {// aqui ya encontre a la tienda ahora hallar el producto
        element.cantidad++
        console.log("===+1:" + element.cantidad + "/" + element.item.Nombre + "\n")

      }

    });

  }

  alert1(cadena) {
    //alert(cadena)
    this.cadenaZ = cadena
    // aqui le aumento la cantidad +1 al carrito
    this.ItemC++//contador del carrito
    this.verCantidadProducto(cadena)
  }


  ngOnInit() {


    this.fase2service.getListaInventario().subscribe((dataList: any) => {
      this.ListaDeTiendasInventario = dataList
      //this.  ListaDeTiendasInventario2 =dataList
      console.log("kkkkkkkkkkkkkkkkkkk\n" + this.ListaDeTiendasInventario)
    }, (err) => {

      console.log(err)
    })


    //aqui implemento la carga de inventario aka tiendas y sus productos


  }
  helloSay2() {

    this.ListaDeTiendasInventario.forEach(element => {
      console.log("***********************\n" + element.Nombre)
      element.ListaProductos.forEach(element2 => {
        console.log("--" + element2.Nombre + " precio:" + element2.Precio + "\n")
      });
    });

  }

  helloSay(cadena) {

    var productos = cadena + "\n"
    this.ListaDeTiendasInventario.forEach(element => {
      if (cadena == element.Nombre) {

        this.ListaDeTiendasInventario2 = element.ListaProductos
        this.TiendaSeleccionada = cadena

        element.ListaProductos.forEach(element2 => {
          //console.log("--" + element2.Nombre + " precio:" + element2.Precio + "\n")
          productos += "item: " + element2.Nombre + " precio: Q" + element2.Precio + " stock:" + element2.Cantidad + "\n"
        });
      }

    });
    //alert(productos.toString())

    console.log(productos)
  }



  /*
  NewTabFile(n) {
    this.condicion = true
    this.tab_count = this.tab_count + 1;
    this.name += this.tab_count.toString();
    //  document.getElementById("tabs_bar").innerHTML += '<button id = "t' + this.tab_count + '" class="tab" onclick="DisplayCode(this)">' + this.name + '<i class="fas fa-times fa-lg" id = "' + this.tab_count + '" onclick ="Cerrar(this)"></i></button>';
    //AQUI TE AGREGE LO DE LAS IMAGENES
    //document.getElementById("tabs_bar").innerHTML += '<div class="card" id = "t'+n +' style="width: 1rem;  "> <img src="https://static-cse.canva.com/blob/211898/17-50-logotipos-que-te-inspiraran.jpg" class="card-img-top" alt="Image" height="500" width="100" > <div class="card-body"> <h5 class="card-title">TIENDA:'+n+'</h5> <p class="card-text">Descripcion:'+(n)+'</p>   <button type="button" id='+n+' class="btn btn-dark" (click)="alert1('+n+')">Productos de tienda '+n+'</button> </div> </div>';

    //<button type="button" class="btn btn-primary">Primary</button>
    //   document.getElementById("tabs_bar").innerHTML+= '<button type="button" id ='+n+' class="btn btn-dark" (click)="alert1((tab_count-1))">{{tab_count}} press'+' </button>';
    this.condicion = false
  }

  ShowTiendas(n) {

    this.tab_count = this.tab_count + 1;
    this.name += this.tab_count.toString();
    //  document.getElementById("tabs_bar").innerHTML += '<button id = "t' + this.tab_count + '" class="tab" onclick="DisplayCode(this)">' + this.name + '<i class="fas fa-times fa-lg" id = "' + this.tab_count + '" onclick ="Cerrar(this)"></i></button>';
    //AQUI TE AGREGE LO DE LAS IMAGENES
    document.getElementById("tabs_bar").innerHTML += '<div class="card" id = "t' + n + ' style="width: 1rem;  "> <img src="https://static-cse.canva.com/blob/211898/17-50-logotipos-que-te-inspiraran.jpg" class="card-img-top" alt="Image" height="500" width="100" (click)="alert1(' + n + ')"> <div class="card-body"> <h5 class="card-title">TIENDA:' + n + '</h5> <p class="card-text">Descripcion:' + (n) + '</p>   <button type="button" id=' + n + ' class="btn btn-dark" (click)="alert1(' + n + ')">Productos de tienda ' + n + '</button> </div> </div>';

    //<button type="button" class="btn btn-primary">Primary</button>
    //   document.getElementById("tabs_bar").innerHTML+= '<button type="button" id ='+n+' class="btn btn-dark" (click)="alert1((tab_count-1))">{{tab_count}} press'+' </button>';

  }*/

  longOut(){
    localStorage.clear()//limpio porq inicio como cliente
    alert("Ha cerrado sesion, Adios!")
    //this.router.navigate(['/home'])
  }



}

