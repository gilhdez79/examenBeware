import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Clientes } from 'src/app/shared/Clientes.model';


import { ClientesService } from  '../../clientessrv/clientes.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {
  clientes: Clientes[];
  listaClientes: Clientes[];

  constructor(private clientesService: ClientesService,
              private router: Router,
              private route: ActivatedRoute,
              private srvClientes : ClientesService) {


  }

  ngOnInit() {
    debugger;
   // this.clientes = this.clientesService.getClientes();
     this.srvClientes.getClientes().then((data)=>{
       debugger;
      this.listaClientes = data["data"];
    });

    this.srvClientes.get_Clientes().subscribe(res => {
      this.listaClientes = res;
       console.log('data response', res);
     });
  }

  onNewClientes() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
