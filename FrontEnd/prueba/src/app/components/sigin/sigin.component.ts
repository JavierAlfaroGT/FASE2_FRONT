import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Fase2Service } from 'src/app/services/fase2.service'


import { Usuarios } from '../../models/Usuarios/usuarios'



@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css']
})
export class SiginComponent implements OnInit {

  //usuario actual = admin|cliente
  user ={
    email:'',
    password:''

  }

  //admin por defecto
  adminDefault ={
    DPI: 1234567890101,
    Correo: 'auxiliar@edd.com',
    Password: '1234',
    Nombre: 'EDD2021'
  }

    //cliente por defecto
    clienteDefault ={
      DPI: 1234567890101,
      Correo: 'SpartanGamerGT',
      Password: '12343',
      Nombre: 'Javier Alfaro'
    }


    //resultado del login
    LoginUsuario: Usuarios ={
      Status:false,
      Typo:""
  
    }

  constructor( private fase2service: Fase2Service ,private router: Router) { }

  /*
      this.fase2service.ActualizarTiendas(valeria)
                      .subscribe(
                        res => {
                          console.log(res)
                        },
                        err => console.log(err)
                      )
  
  */

  ngOnInit(): void {
/*
    this.fase2service.getListaInventario().subscribe((dataList: any) => {
      this.ListaDeTiendasInventario = dataList
      //this.  ListaDeTiendasInventario2 =dataList
      console.log("kkkkkkkkkkkkkkkkkkk\n" + this.ListaDeTiendasInventario)
    }, (err) => {

      console.log(err)
    })*/
  }


  signUp(){
    console.log(this.user)

    if (this.user.email==this.clienteDefault.Correo && this.user.password==this.clienteDefault.Password){

      alert("Bienvenido javier xd: "+this.clienteDefault.Nombre)
      
      localStorage.clear()//limpio porq inicio como admin default
      localStorage.setItem('usuario', 'Usuario');
      this.router.navigate(['/tiendas'])
      

    }else 

    if (this.user.email==this.adminDefault.Correo && this.user.password==this.adminDefault.Password){

      alert("Bienvenido administrador: "+this.adminDefault.Nombre)
      
      localStorage.clear()//limpio porq inicio como admin default
      localStorage.setItem('usuario', 'Admin');
      this.router.navigate(['/Admin'])
      

    }else{
//si no es el aux por defecto comprobar por medio del back end que sea un aux valido

var valeria = "{ \"Dpi\":"+this.user.email+",\"Password\":\""+this.user.password+"\"}"



//ACTUALIZE LOS Q SE PUDIERON COMPRAR
this.fase2service.Login(valeria)
.subscribe(
  (res: any) => {
    console.log(res)

    this.LoginUsuario=res//aqui igualo el json de go al de js para q me indique el tipo de usuario,y si fue exitoso la comprobacion en el back

    if (this.LoginUsuario.Status==true){
          //esperar confirmacion del back para acceder
          alert("Bienvenido de nuevo "+this.LoginUsuario.Typo+"!")
          localStorage.clear()//limpio porq inicio como cliente
          localStorage.setItem('usuario', this.LoginUsuario.Typo);

          if(this.LoginUsuario.Typo=="Admin"){
            this.router.navigate(['/Admin'])
          }else {
            this.router.navigate(['/tiendas'])
          }
          
    }else{
      alert("Usuario no existe"+this.LoginUsuario.Typo+"!")
    }


  },
  err => console.log(err)
)




    }

  }

}
