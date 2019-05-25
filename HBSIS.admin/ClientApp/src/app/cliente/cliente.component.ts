import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: Cliente[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Cliente[]>(baseUrl + 'api/cliente').subscribe(result => {
      this.clientes = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

interface Cliente {
  id: number;
  nome: string;
  cnpj: string;
  latitude: number;
  longitude: number;
}
