import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class ClienteService {

  url: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
    this.url = this.baseUrl + 'api/cliente';
  }

  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
    /*return this.http.get<Cliente[]>(this.baseUrl + 'api/cliente').subscribe(result => {
      clientes = result;
    }, error => console.error(error));*/
  }

  getCliente(id: string): Observable<Cliente> {
    const opt = { params: new HttpParams().set('id', id) };

    return this.http.get<Cliente>(this.url +'/ObterPorId', opt);
  }

  addCliente(cli: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cli, httpOption);
  }

  updateCliente(cli: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.url, cli, httpOption);
  }
}

export class Cliente {
  id: number;
  razaoSocial: string = '';
  cnpj: string = '';
  latitude: number;
  longitude: number;
}
