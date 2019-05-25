import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendedor, VendedorService } from './vendedor.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  vendedores: Vendedor[];

  /*constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Vendedor[]>(baseUrl + 'api/vendedor').subscribe(result => {
      this.vendedores = result;
    }, error => console.error(error));
  }*/

  constructor(private service: VendedorService) {}

  ngOnInit() {
    this.getVendedores();
  }

  getVendedores(): void {
    this.service.getVendedores().subscribe(result => {
      this.vendedores = result;
    }, error => console.error(error));
  }

  onDelete(vend: Vendedor) {
    console.log("Deletar vendedor: " + vend.nome);
  }

}
