import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './clientes.model';
import { HttpClient } from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data-service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  
  constructor(private http: HttpClient) {}
  
   //clientes é o nome da variável na classe InMemoryDataService, que é responsável
   //por fornecer a lista de clientes
  private clientesUrl = 'api/clientes';

  /* obtendo a lista de clientes do servidor */
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clientesUrl)
  }

  getClienteById(id: number): Observable<Cliente> {
    const url = `${this.clientesUrl}/${id}`
    return this.http.get<Cliente>(url);
  }

  deleteCliente(id: number): Observable<Cliente> {
    const url = `${this.clientesUrl}/${id}`
    return this.http.delete<Cliente>(url);
  }

}
