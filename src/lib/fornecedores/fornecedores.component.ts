import { Component, OnInit } from '@angular/core';
import { FORNECEDORES } from './fornecedores';

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
