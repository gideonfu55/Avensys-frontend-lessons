import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardoneGuard } from './guardone.guard';

describe('guardoneGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardoneGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
