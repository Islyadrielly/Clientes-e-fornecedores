import { Pessoa } from "../shared/pessoa.model";

export interface Fornecedor extends Pessoa {
    cnpj: number;
    fornecedorDesde: string;
    diaDePagamento: string;
}