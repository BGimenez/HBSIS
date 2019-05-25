import { Component, OnInit, Inject } from '@angular/core';
import { ClienteService, Cliente } from './cliente.service';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']//,
  //providers: [ClienteService]
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];

  //constructor(http: HttpClient) {
  constructor(private service: ClienteService) {
    
  }

  ngOnInit() {
    this.getClientes();
  }

  getClientes(): void {
    this.service.getClientes().subscribe(result => {
      this.clientes = result;
    }, error => console.error(error));
  }

  onDelete(cli: Cliente) {
    console.log("Deletar cliente: " + cli.razaoSocial);
  }

}
