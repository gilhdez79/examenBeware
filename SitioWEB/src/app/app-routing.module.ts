import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes/clientes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ClientesStartComponent } from './clientes/clientes-start/clientes-start.component';
import { ClientesDetailComponent } from './clientes/clientes-detail/clientes-detail.component';
import { ClientesEditComponent } from './clientes/clientes-edit/clientes-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: 'clientes', component: ClientesComponent, children: [
    { path: '', component: ClientesStartComponent },
    { path: 'new', component: ClientesEditComponent },
    { path: ':id', component: ClientesDetailComponent },
    { path: ':id/edit', component: ClientesEditComponent },
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
