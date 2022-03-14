import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from './fornecedores.model';
import { HttpClient } from '@angular/common/http';
import { InMemoryDataService } from '../clientes/in-memory-data-service';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  constructor(private http: HttpClient) {}

  private fornecedoresUrl = 'api/fornecedores';

  getFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.fornecedoresUrl)
  }

  getFornecedorById(id: number): Observable<Fornecedor> {
    const url = `${this.fornecedoresUrl}/${id}`
    return this.http.get<Fornecedor>(url);
  }

  deleteFornecedor(id: number): Observable<Fornecedor> {
    const url = `${this.fornecedoresUrl}/${id}`
    return this.http.delete<Fornecedor>(url);
  }

}
