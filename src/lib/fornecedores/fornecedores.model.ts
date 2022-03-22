import { Pessoa } from "../shared/pessoa.model";

export interface Fornecedor extends Pessoa {
    type: "cnpj";
}