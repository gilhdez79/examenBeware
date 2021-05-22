import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientesService } from 'src/app/clientessrv/clientes.service';
import { Clientes } from 'src/app/shared/Clientes.model';



@Component({
  selector: 'app-clientes-detail',
  templateUrl: './clientes-detail.component.html',
  styleUrls: ['./clientes-detail.component.css']
})
export class ClientesDetailComponent implements OnInit {
  clientes: Clientes;
  id: number;
  cliente:Clientes;

  constructor(private clientesService: ClientesService,
              private route: ActivatedRoute,
              private router: Router,
            ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];


          this.clientesService.get_Clientes((this.id+1).toString()).subscribe((s)=>{
            this.cliente = s;
             console.log(this.cliente);
          });


        }
      );

  }

  // onAddToShoppingList() {
  //   this.clientesService.addIngredientsToShoppingList(this.clientes.ingredients);
  // }



  onEditClientes() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
