import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {

    const dados = [
      {id: 111, name: 'Lux', 16988075641, address: 'Av. Mid, 621', type: 'cpf' },
      {id: 112, name: 'Renata', cell: 1755342869, address: 'Rua Bot, 74', type: 'cpf' },
      {id: 113, name: 'azir',  cell: 55555252, address: 'rua 12', type: 'cpf'},
      {id: 114, name: 'ezreal', cell: 52529999, address: 'rua 22', type: 'cpf'},
      {id: 115, name: 'zyra', cell: 52525984, address: 'rua 22', type: 'cpf' },
      {id: 116, name: 'ziggs', cell: 52525669, address: 'rua 22', type: 'cpf'},
      {id: 117, name: 'seraphine', cell: 52529547, address: 'rua 22', type: 'cpf'},
      {id: 118, name: 'kaisa', cell: 52545182, address: 'rua 22', type: 'cpf'},
      {id: 119, name: 'khazix', cell: 52512352, address: 'rua 22', type: 'cpf'},
      {id: 120, name: 'lulu', cell: 52554122, address: 'rua 22', type: 'cpf'},
      { id: 211, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83', type: 'cnpj' },
      { id: 212, name: 'Melancia Sweet', cell: 1632524123, address: 'Rua Pimbal, 83', type: 'cnpj' },
      { id: 213, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83', type: 'cnpj' },
      { id: 214, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83', type: 'cnpj' },
      { id: 215, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83', type: 'cnpj' },
      { id: 216, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83', type: 'cnpj' },
      { id: 217, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83', type: 'cnpj' },
      { id: 218, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83', type: 'cnpj' },
      { id: 219, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83', type: 'cnpj' },
      { id: 220, name: 'Banana Balls', cell: 1632524123, address: 'Rua Pimbal, 83', type: 'cnpj' },
  ];

  return {dados};

  }

  constructor() { }
}
