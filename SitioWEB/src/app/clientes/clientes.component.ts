import { Component, OnInit } from '@angular/core';
import { Clientes } from '../shared/Clientes.model';
import { ClientesService } from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClientesService]
})
export class ClientesComponent implements OnInit {
  selectedClientes: Clientes;

  constructor(private clientesService: ClientesService) { }

  ngOnInit() {
    this.clientesService.clientesSelected
      .subscribe(
        (clientes: Clientes) => {
          this.selectedClientes = clientes;
        }
      );
  }

}
