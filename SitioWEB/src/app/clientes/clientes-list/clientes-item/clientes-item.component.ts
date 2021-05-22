import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import {Clientes} from "../../../shared/Clientes.model";

@Component({
  selector: 'app-clientes-item',
  templateUrl: './clientes-item.component.html',
  styleUrls: ['./clientes-item.component.css']
})
export class ClientesItemComponent implements OnInit {
  @Input() Clientes?: Clientes;
  @Input() index: number;
clientes:any;


  ngOnInit() {
  }
}
