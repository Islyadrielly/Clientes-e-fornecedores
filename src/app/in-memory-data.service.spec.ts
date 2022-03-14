import { TestBed } from '@angular/core/testing';
import { InMemoryDataServiceFornecedores } from './in-memory-data.service';

describe('InMemoryDataService', () => {
  let service: InMemoryDataServiceFornecedores;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataServiceFornecedores);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
