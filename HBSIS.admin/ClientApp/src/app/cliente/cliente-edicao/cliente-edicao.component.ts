import { Component, OnInit } from '@angular/core';
import { Cliente, ClienteService } from '../cliente.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cliente-edicao',
  templateUrl: './cliente-edicao.component.html',
  styleUrls: ['./cliente-edicao.component.css']
})
export class ClienteEdicaoComponent implements OnInit {

  cliente: Cliente;

  constructor(private route: ActivatedRoute, private router: Router, private service: ClienteService) { }

  ngOnInit() {
    let id;

    console.log("Entrei edição");

    this.route.paramMap.subscribe(par => {
      id = par.get('id');
      console.log(par.get('id'));
    });


    console.log("Peguei o parametro: "+id);

    if (id != undefined)
      this.service.getCliente(id).subscribe(cli => this.cliente = cli);
  }

  onSalvar() {
    console.log("Salvar edição cliente: " + this.cliente.razaoSocial);
    this.service.updateCliente(this.cliente).subscribe(result => {
      console.log("Retorno: " + result);

      this.onVoltar();
    }, error => console.error(error));
  }

  onVoltar() {
    this.router.navigate(['/cliente']);
  }
}
