import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  vendedores: Vendedor[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Vendedor[]>(baseUrl + 'api/vendedor').subscribe(result => {
      this.vendedores = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }

}

interface Vendedor {
  id: number;
  nome: string;
  cpf: string;
  latitude: number;
  longitude: number;
}
