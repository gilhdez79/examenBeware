import { AstMemoryEfficientTransformer } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import {Clientes} from "../../../shared/Clientes.model";

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe?: Recipe;
  @Input() index: number;
clientes:any;


  ngOnInit() {
  }
}
