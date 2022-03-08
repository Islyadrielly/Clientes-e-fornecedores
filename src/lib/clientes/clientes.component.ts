import { Component, OnInit } from '@angular/core';
import { CLIENTES } from './clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  clientes = CLIENTES;

  columnsToDisplay = ['id', 'name', 'cell', 'address'];

  constructor() { }

  ngOnInit(): void {
  }

}
