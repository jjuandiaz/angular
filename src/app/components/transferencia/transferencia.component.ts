import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Destinatario } from 'src/app/model/destinatario';
import { Persona } from 'src/app/model/persona';
import { DestinatarioService } from 'src/app/services/destinatario/destinatario.service';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';


@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit { 
  titulo = 'Transferir';
  montoTransferencia: number = 0;
  destinatario: String = "";
  detalleResultado : Destinatario ;

  allDetalles: Destinatario[] ;
  filtered: Destinatario[];

  
  constructor(private router:Router,private destinatarioService:DestinatarioService, private transferenciaService:TransferenciaService) { }

 //Informacion enviada a la consola
  ngOnInit() {
    this.destinatarioService.getListado().subscribe((response) => {
      if (!response.error) {
        this.allDetalles = response.data;
      }
    }, (error) => { alert("Error al desplegar informacion listado destinatarios: "); console.log(error); });
  }


  procesaPropagar(mensaje:Destinatario) {
    this.detalleResultado = mensaje;
  }
  
  //Funcion del filtrado
  search(search: string) {
        this.filtered = this.allDetalles.filter(item => item.persona.rut.includes(search) );
    }
  
  realizarTransferencia() {
    this.transferenciaService.registro(this.detalleResultado, this.montoTransferencia).subscribe((response) => {
      if (!response.error) {
          this.allDetalles = response.data;
          this.router.navigate(['historial']);
      }
    }, (error) => { alert("Error al desplegar informacion listado destinatarios: "); console.log(error); });


  }
}
