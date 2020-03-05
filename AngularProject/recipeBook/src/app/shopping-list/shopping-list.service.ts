import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.module';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients('Apples',5),
    new Ingredients('Tomatoes', 10)
  ]

  constructor() { }

  getIngredient() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient) {
    
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
    this.ingredientAdded.emit(this.ingredients.slice())

    console.log("**",this.ingredientAdded)
  }
  

}
