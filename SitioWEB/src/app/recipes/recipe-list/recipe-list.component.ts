import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/clientessrv/clientes.service';
import { Clientes } from 'src/app/shared/Clientes.model';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  listaClientes: Clientes[];

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute,
              private srvClientes : ClientesService) {


  }

  ngOnInit() {
    debugger;
    this.recipes = this.recipeService.getRecipes();
    //  this.srvClientes.getClientes().then((data)=>{
    //    debugger;
    //   this.listaClientes = data["data"];
    // });

    this.srvClientes.get_Clientes().subscribe(res => {
      this.listaClientes = res;
       console.log('data response', res);
     });
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
