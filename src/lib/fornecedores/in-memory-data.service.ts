import { Injectable } from '@angular/core';
import { Fornecedor } from './fornecedores.model'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const fornecedores = [
      { id: 211, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83' },
      { id: 212, name: 'Melancia Sweet', cell: 1632524123, address: 'Rua Pimbal, 83' },
      { id: 213, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83' },
      { id: 214, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83' },
      { id: 215, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83' },
      { id: 216, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83' },
      { id: 217, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83' },
      { id: 218, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83' },
      { id: 219, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83' },
      { id: 220, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83' },
  ];

  return {fornecedores};

  }

  constructor() { }
}
