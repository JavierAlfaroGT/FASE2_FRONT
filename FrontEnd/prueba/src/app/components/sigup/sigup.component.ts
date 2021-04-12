import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Fase2Service } from 'src/app/services/fase2.service'


//import { Usuarios } from '../../models/Usuarios/usuarios'

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css']
})
export class SigupComponent implements OnInit {

  constructor(private fase2service: Fase2Service ,private router: Router) { }

 /* NuevoUsuarioCreate: Usuarios ={
    Correo:"",
    Cuenta:"",
    Password:"",
    Dpi:0,
    Nombre:""

  }    //ORIGINAL DONDE DEBO RESTAR<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
*/

  newUser={
    email:"",
    password:"",
    nombre:"",
    dpi:0
  }

  ngOnInit(): void {
  }


  crearUsuario(){

    console.log(this.newUser)
   // this.NuevoUsuarioCreate.Correo="aaaaaaaaaaaaaaaaaa"
   // console.log(this.NuevoUsuarioCreate)

 /*   this.NuevoUsuarioCreate.Correo=this.newUser.email
    this.NuevoUsuarioCreate.Cuenta="Usuario"
    this.NuevoUsuarioCreate.Dpi=this.newUser.dpi
    this.NuevoUsuarioCreate.Nombre=this.newUser.nombre
    this.NuevoUsuarioCreate.Password=this.newUser.password

    console.log("FFFFFF\n\n"+this.NuevoUsuarioCreate.Correo)*/

    //ok ahora envio los datos al back
    var valeria = "{ \"Dpi\":"+this.newUser.dpi+",\"Nombre\":\""+this.newUser.nombre+"\",\"Correo\":\""+this.newUser.email+"\",\"Password\":\""+this.newUser.password+"\",\"Cuenta\":\"Usuario\""+"}"



    //ACTUALIZE LOS Q SE PUDIERON COMPRAR
    this.fase2service.CrearUsuarios(valeria)
    .subscribe(
      res => {
        console.log(res)

        if (res==true){
              //esperar confirmacion del back para acceder
              alert("Bienvenido nuevo usuario, has sido creado sastifactoriamente!")
              localStorage.clear()//limpio porq inicio como cliente
              localStorage.setItem('usuario', 'Usuario');
              this.router.navigate(['/tiendas'])

    
        }


      },
      err => console.log(err)
    )









  }

}
