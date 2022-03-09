import { Component, OnInit } from '@angular/core';
import { FORNECEDORES } from './fornecedores';
import { CLIENTES } from '../clientes/clientes';

@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  fornecedores = FORNECEDORES;

  columnsToDisplay = ['id', 'name', 'cell', 'address'];

  constructor() { }

  ngOnInit(): void {
  }

}
