import { TestBed } from '@angular/core/testing';

import { ValidationResolverService } from './validation-resolver.service';

describe('ValidationResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationResolverService = TestBed.get(ValidationResolverService);
    expect(service).toBeTruthy();
  });
});
