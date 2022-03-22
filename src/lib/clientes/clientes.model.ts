import { Pessoa } from "../shared/pessoa.model";

export interface Cliente extends Pessoa {
    type: "cpf";
  }
