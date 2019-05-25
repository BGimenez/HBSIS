import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VendedorComponent } from './vendedor/vendedor.component';
import { VendedorCadastroComponent } from './vendedor/vendedor-cadastro/vendedor-cadastro.component';
import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component';

import { ClienteService } from './cliente/cliente.service';
import { VendedorService } from './vendedor/vendedor.service';
import { ClienteEdicaoComponent } from './cliente/cliente-edicao/cliente-edicao.component';
import { VendedorEdicaoComponent } from './vendedor/vendedor-edicao/vendedor-edicao.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    ClienteComponent,
    VendedorComponent,
    VendedorCadastroComponent,
    ClienteCadastroComponent,
    ClienteEdicaoComponent,
    VendedorEdicaoComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'cliente', component: ClienteComponent },
      { path: 'vendedor', component: VendedorComponent },
      { path: 'vendedor/cadastro', component: VendedorCadastroComponent },
      { path: 'vendedor/:id', component: VendedorEdicaoComponent },
      { path: 'cliente/cadastro', component: ClienteCadastroComponent },
      { path: 'cliente/:id', component: ClienteEdicaoComponent }
    ])
  ],
  providers: [
    ClienteService,
    VendedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
