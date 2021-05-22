import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesListComponent } from './clientes/clientes-list/clientes-list.component';
import { ClientesDetailComponent } from './clientes/clientes-detail/clientes-detail.component';
import { ClientesItemComponent } from './clientes/clientes-list/clientes-item/clientes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { ClientesStartComponent } from './clientes/clientes-start/clientes-start.component';
import { ClientesEditComponent } from './clientes/clientes-edit/clientes-edit.component';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientesComponent,
    ClientesListComponent,
    ClientesDetailComponent,
    ClientesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ClientesStartComponent,
    ClientesEditComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
