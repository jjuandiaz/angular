import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 
import { Cuenta } from 'src/app/model/cuenta';
import { Destinatario } from 'src/app/model/destinatario';
import { Persona } from 'src/app/model/persona';
import { BancoService } from 'src/app/services/banco/banco.service';
import { Banco } from 'src/app/services/banco/model/banco';
import { DestinatarioService } from 'src/app/services/destinatario/destinatario.service';
import { FirestoreService } from 'src/app/services/firestore/firestore.service';
import { TipoCuenta } from 'src/app/services/firestore/model/tipoCuenta';

@Component({
  selector: 'app-destinatario',
  templateUrl: './destinatario.component.html',
  styleUrls: ['./destinatario.component.css']
})
export class DestinatarioComponent  implements OnInit {
  titulo = 'Nuevo Destinatario';
  destinatario?: Destinatario = new Destinatario();
  listaTipoCuentas:TipoCuenta[];
  listabancoDestinos: Banco[] ;
  banco: string;
  rut: string;
  nombre: string;
  numeroTelefono: string;
  correo: string;
  numeroCuenta: string;
  tipoCuenta: string;

  constructor(private bancoServices: BancoService, private router:Router, private fireStoreService :FirestoreService, private destinatarioService :DestinatarioService) { }
  
  ngOnInit() {
   this.obtenerListadoBancos();
   this.obtenerListadoTipoCuenta();
  }
  
  obtenerListadoBancos() {
    this.bancoServices.getListado().subscribe((response) => {
      this.listabancoDestinos = response.result;
    }, (error) => { console.log("Error al obtener informacion obtenerListadoBancos: " + error); console.log(error); });
  }
  obtenerListadoTipoCuenta() {
    this.fireStoreService.getTipoCuenta().subscribe((response) => {
      this.listaTipoCuentas = response;
      
      
    }, (error) => { console.log("Error al obtener informacion tipo cuenta: " + error); console.log(error); });
  }

  crearDestinatario(): void{
    console.log(this.rut + "-" + this.nombre + "-" + this.numeroCuenta + "-" + this.tipoCuenta + "-" + this.correo + "-" + this.banco);

    const destinatario: Destinatario = new Destinatario();
    const persona: Persona = new Persona();
    const cuenta: Cuenta = new Cuenta();

    persona.rut               = this.rut;
    persona.nombre            = this.nombre;
    persona.correo            = this.correo;
    persona.numeroTelefono    = this.numeroTelefono;
    destinatario.persona      = persona;
    cuenta.banco              = this.banco;
    cuenta.numero             = this.numeroCuenta;
    destinatario.cuenta       = cuenta;
    destinatario.cuenta.tipo  = this.tipoCuenta;


    this.destinatarioService.registro(destinatario).subscribe((response) => {
      if (!response.error) {
        this.router.navigate(['transferencia']);
      }
      
    }, (error) => { alert("Error al registrar informacion tipo cuenta: "); console.log(error); });
  
  }

}
