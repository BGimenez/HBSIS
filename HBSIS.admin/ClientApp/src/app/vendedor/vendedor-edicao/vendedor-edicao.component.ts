import { Component, OnInit } from '@angular/core';
import { Vendedor, VendedorService } from '../vendedor.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-vendedor-edicao',
  templateUrl: './vendedor-edicao.component.html',
  styleUrls: ['./vendedor-edicao.component.css']
})
export class VendedorEdicaoComponent implements OnInit {

  vendedor: Vendedor;

  constructor(private route: ActivatedRoute, private router: Router, private service: VendedorService) { }

  ngOnInit() {
    let id: string;

    this.route.paramMap.subscribe(par => {
      id = par.get('id');
    })

    if (id != undefined)
      this.service.getVendedor(id).subscribe(vend => this.vendedor = vend);
  }


  onSalvar() {
    console.log("Salvar edição vendedor: " + this.vendedor.nome);
    this.service.updateVendedor(this.vendedor).subscribe(result => {
      console.log("Retorno: " + result);

      this.onVoltar();
    }, error => console.error(error));
  }

  onVoltar() {
    this.router.navigate(['/cliente']);
  }
}
