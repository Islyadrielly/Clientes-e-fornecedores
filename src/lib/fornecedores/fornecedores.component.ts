import { Component, OnInit } from '@angular/core';
import { Fornecedor } from './fornecedores.model';
import { FornecedoresService } from './fornecedores.service';


@Component({
  selector: 'app-fornecedores',
  templateUrl: './fornecedores.component.html',
  styleUrls: ['./fornecedores.component.css']
})
export class FornecedoresComponent implements OnInit {

  fornecedores: Fornecedor[] = [];

  columnsToDisplay = ['id', 'name', 'cell', 'address', 'delete'];

  constructor(private fornecedoresService: FornecedoresService) { }

  ngOnInit(): void {
    this.getFornecedores();
  }

  getFornecedores(): void {
    this.fornecedoresService.getFornecedores()
    .subscribe(fornecedores => this.fornecedores = fornecedores);
  }

  deleteFornecedor(fornecedor: Fornecedor): void {
    this.fornecedores = this.fornecedores.filter(f => f !== fornecedor)
    this.fornecedoresService.deleteFornecedor(fornecedor.id).subscribe();
  }

}
