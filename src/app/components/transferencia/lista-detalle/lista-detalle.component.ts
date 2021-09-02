import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Destinatario } from 'src/app/model/destinatario';
import { TransferenciaComponent } from '../transferencia.component';


@Component({
  selector: 'app-lista-detalle',
  templateUrl: './lista-detalle.component.html',
  styleUrls: ['./lista-detalle.component.css']
})
export class ListaDetalleComponent implements OnInit {
 //Damos nombres a los array
  @Input()
  detalles: Destinatario[];
  //Parte no funcional del trabajo
  @Output() detalleEmitter =  new EventEmitter<Destinatario>();
  //@ViewChild('draggable') private draggableElement: ElementRef;
  isVisible = true;

  constructor() { }

  ngOnInit() { }

  onPropagar(detalle: Destinatario) {
       console.log("this.detalle");
    console.log(detalle);
    this.isVisible = false;
    this.detalleEmitter.emit(detalle);
    //this.draggableElement.nativeElement.remove();
  }
}