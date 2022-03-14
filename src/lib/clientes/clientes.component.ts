import { Component, OnInit } from '@angular/core';
import { Cliente } from './clientes.model';
import { ClientesService } from './clientes.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  columnsToDisplay = ['id', 'name', 'cell', 'address', 'delete'];

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.getClientes();
  }

  getClientes(): void {
  this.clientesService.getClientes()
    .subscribe(clientes => this.clientes = clientes);
  } 

  deleteCliente(cliente: Cliente): void {
    this.clientes = this.clientes.filter(c => c !== cliente)
    this.clientesService.deleteCliente(cliente.id).subscribe();
  }

}
