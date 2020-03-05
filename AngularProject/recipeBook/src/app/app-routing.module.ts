import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/recipes' ,pathMatch: 'full'},
  {path: 'recipes', component:RecipesComponent, children:[
    {path: ':id' , component:RecipeDetailComponent}
  ]},
  {path: 'shopping', component:ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
