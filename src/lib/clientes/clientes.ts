export interface Cliente {
    id: number;
    name: string;
    cell: number;
    address: string;
  }

export const CLIENTES: Cliente[] = [
  {id: 111, name: 'zilean', cell: 15156955, address: 'rua 22' },
  {id: 112, name: 'renata', cell: 52526665, address: 'rua 15' },
  {id: 113, name: 'azir',  cell: 55555252, address: 'rua 12'},
  {id: 114, name: 'ezreal', cell: 52529999, address: 'rua 22'},
  {id: 115, name: 'zyra', cell: 52525984, address: 'rua 22' },
  {id: 116, name: 'ziggs', cell: 52525669, address: 'rua 22' },
  {id: 117, name: 'seraphine', cell: 52529547, address: 'rua 22' },
  {id: 118, name: 'kaisa', cell: 52545182, address: 'rua 22' },
  {id: 119, name: 'khazix', cell: 52512352, address: 'rua 22' },
  {id: 120, name: 'lulu', cell: 52554122, address: 'rua 22' },
];