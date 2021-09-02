import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Transferencia } from 'src/app/model/transferencia';
import { TransferenciaService } from 'src/app/services/transferencia/transferencia.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  titulo = 'Historial';
  headers = ["Nombre", "RUT", "Banco", "Tipo de cuenta", "Monto"];
  
  transacciones: Transferencia[];
 
  constructor( private transferenciaService:TransferenciaService) { }

  ngOnInit(): void {

    this.transferenciaService.getListado().subscribe((response) => {
    console.log(response);
      if (!response.error) {
          this.transacciones = response.data;
      }
    }, (error) => { alert("Error al desplegar informacion listado destinatarios: "); console.log(error); });

  }

}
