import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class VendedorService {

  url: string;

  constructor(private http: HttpClient, @Inject("BASE_URL") private baseUrl: string) {
    this.url = this.baseUrl + "api/vendedor";
  }

  getVendedores(): Observable<Vendedor[]> {
    return this.http.get<Vendedor[]>(this.url);
  }

  getVendedor(id: string): Observable<Vendedor> {

    const opt = { params: new HttpParams().set('id', id) };

    return this.http.get<Vendedor>(this.url+ '/ObterPorId', opt);
  }

  addVendedor(vend: Vendedor): Observable<Vendedor> {
    return this.http.post<Vendedor>(this.url, vend, httpOption);
  }

  updateVendedor(vend: Vendedor): Observable<Vendedor> {
    return this.http.put<Vendedor>(this.url, vend, httpOption);
  }
}


export class Vendedor {
  id: number;
  nome: string = '';
  cpf: string = '';
  latitude: number;
  longitude: number;
}
