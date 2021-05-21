import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {   FormControl, FormGroup, NgForm } from '@angular/forms';
import { Clientes } from 'src/app/shared/Clientes.model';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  itemCliente:Clientes;
formGroup:FormGroup;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
        }
      );

      this.formGroup = new FormGroup({
        txtNombreUsuario: new FormControl(''),
        password: new FormControl(''),
        txtApellidos: new FormControl('')
      });

  }
onSubmit(f: NgForm){
console.log(f);
const { password  } = f.value;
}
}
