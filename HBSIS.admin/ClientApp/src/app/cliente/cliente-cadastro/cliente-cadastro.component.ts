import { Component, OnInit } from '@angular/core';
import { Cliente, ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {

  cliente: Cliente;

  constructor(private service: ClienteService, private router: Router) {

  }

  ngOnInit() {
    this.cliente = new Cliente();
  }

  onSalvar() {
    console.log("Salvar cliente: " + this.cliente.razaoSocial);
    this.service.addCliente(this.cliente).subscribe(result => {
      console.log("Retorno: " + result);

      this.router.navigate(['/cliente']);
    }, error => console.error(error));
  }
}
