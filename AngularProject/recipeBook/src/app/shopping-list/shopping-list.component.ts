import { Component, OnInit } from '@angular/core';

import { Ingredients } from '../shared/ingredients.module';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredient();
    this.slService.ingredientAdded.subscribe((ingredients: Ingredients[])=>{
      this.ingredients = ingredients
    })
  }
}
