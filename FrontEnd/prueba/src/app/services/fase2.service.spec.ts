import { TestBed } from '@angular/core/testing';

import { Fase2Service } from './fase2.service';

describe('Fase2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Fase2Service = TestBed.get(Fase2Service);
    expect(service).toBeTruthy();
  });
});
