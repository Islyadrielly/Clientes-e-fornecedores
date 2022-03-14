import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from './fornecedores.model';
import { HttpClient } from '@angular/common/http';
import { InMemoryDataService } from '../../app/in-memory-data.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FornecedoresService {

  constructor(private http: HttpClient) {}

  private fornecedoresUrl = 'api/dados';

  getFornecedores(): Observable<Fornecedor[]> {
    return this.http.get<Fornecedor[]>(this.fornecedoresUrl)
    .pipe(
      map(pessoas => pessoas.filter(pessoa => pessoa.type === 'cnpj'))
    )
  }

  deleteFornecedor(id: number): Observable<Fornecedor> {
    const url = `${this.fornecedoresUrl}/${id}`
    return this.http.delete<Fornecedor>(url);
  }

}
