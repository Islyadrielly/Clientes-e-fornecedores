import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {

    const dados = [
      {id: 111, name: 'Lux', cell: 16988075645, address: 'Av. Mid, 621', type: 'cpf' },
      {id: 112, name: 'Renata', cell: 17995342869, address: 'Rua Bot, 174', type: 'cpf' },
      {id: 113, name: 'Morgana',  cell: 12993657214, address: 'Rua Bot, 568', type: 'cpf'},
      {id: 114, name: 'Ezreal', cell: 16984572136, address: 'Rua Bot, 222', type: 'cpf'},
      {id: 115, name: 'Evelyn', cell: 18984527163, address: 'Av. Jungle, 847', type: 'cpf' },
      {id: 116, name: 'Darius', cell: 19965452691, address: 'Rua Top, 776', type: 'cpf'},
      {id: 117, name: 'Irelia', cell: 35988741255, address: 'Rua Top, 851', type: 'cpf'},
      {id: 118, name: 'Kaisa', cell: 14983221456, address: 'Rua Bot, 928', type: 'cpf'},
      {id: 119, name: 'Khazix', cell: 16984557126, address: 'Av. Jungle, 428', type: 'cpf'},
      {id: 120, name: 'Lulu', cell: 17984756213, address: 'Av. Mid, 244', type: 'cpf'},
      { id: 211, name: 'Barão Nashor', cell: 1632524123, address: 'Av. Jungle-top, 1256', type: 'cnpj' },
      { id: 212, name: 'Dragão Hextec', cell: 1634259835, address: 'Av. Jungle-bot, 1256', type: 'cnpj' },
      { id: 213, name: 'Nexus', cell: 1633694215, address: 'Rua Base, 12', type: 'cnpj' },
      { id: 214, name: 'Arauto do Vale', cell: 1633152869, address: 'Av. Jungle-top, 1256', type: 'cnpj' },
      { id: 215, name: 'Minions', cell: 1633625987, address: 'sem localização exata', type: 'cnpj' },
      { id: 216, name: 'Aronguejo', cell: 1632147589, address: 'Av. Jungle, 1260', type: 'cnpj' },
      { id: 217, name: 'Lobo Trevoguari', cell: 1632546811, address: 'Av. Jungle-bot, 206', type: 'cnpj' },
      { id: 218, name: 'Azuporã', cell: 1635147842, address: 'Av. Jungle, 133', type: 'cnpj' },
      { id: 219, name: 'Rubrivira', cell: 1631458276, address: 'Av. Jungle, 533', type: 'cnpj' },
      { id: 220, name: 'Grompe', cell: 1632524123, address: 'Av. Jungle, 524', type: 'cnpj' },
  ];

  return {dados};

  }

  constructor() { }
}
