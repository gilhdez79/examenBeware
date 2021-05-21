import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClientesService } from 'src/app/clientessrv/clientes.service';
import { Clientes } from 'src/app/shared/Clientes.model';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  cliente:Clientes;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router,
              private clientesrv: ClientesService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);

          this.clientesrv.get_Clientes((this.id+1).toString()).subscribe((s)=>{
            this.cliente = s;
             console.log(this.cliente);
          });
    

        }
      );

  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
