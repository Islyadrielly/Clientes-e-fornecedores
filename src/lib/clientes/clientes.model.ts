import { Pessoa } from "../shared/pessoa.model";

export interface Cliente extends Pessoa {
    cpf: number;
    clienteDesde: string;
    mensalidade: number;
  }
