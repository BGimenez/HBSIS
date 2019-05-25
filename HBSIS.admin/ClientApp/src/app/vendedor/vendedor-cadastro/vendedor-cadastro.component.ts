import { Component, OnInit } from '@angular/core';
import { Vendedor, VendedorService } from '../vendedor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendedor-cadastro',
  templateUrl: './vendedor-cadastro.component.html',
  styleUrls: ['./vendedor-cadastro.component.css']
})
export class VendedorCadastroComponent implements OnInit {

  vendedor: Vendedor;

  constructor(private service: VendedorService, private router: Router) {
    
  }

  ngOnInit() {
    this.vendedor = new Vendedor();
  }

  onSalvar() {
    console.log("Salvar vendedor: " + this.vendedor.nome);
    this.service.addVendedor(this.vendedor).subscribe(result => {
      console.log("Retorno: " + result);

      this.router.navigate(['/vendedor']);
    }, error => console.error(error));
  }
}
