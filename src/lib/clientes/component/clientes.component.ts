import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cliente } from '../clientes.model';
import { ClientesService } from '../clientes.service';
import { MatDialogComponent } from '../mat-dialog/mat-dialog.component';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})

export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  columnsToDisplay = ['id', 'name', 'cell', 'address', 'delete'];

  
  constructor(private clientesService: ClientesService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getClientes();
  }
  
  getClientes(): void {
    this.clientesService.getClientes()
    .subscribe((clientes) => this.clientes = clientes);
  } 

  confirmDialog(cliente: Cliente): void {
    const caixaDialogo = this.dialog.open(MatDialogComponent); 

    caixaDialogo.afterClosed().subscribe((escolha: Boolean) => {
      if(escolha) {
        this.deleteCliente(cliente);
      }
    })
  }
  deleteCliente(cliente: Cliente): void {
    this.clientes = this.clientes.filter(c => c !== cliente)
    this.clientesService.deleteCliente(cliente.id).subscribe();
  }

}
