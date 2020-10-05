import { TestBed } from '@angular/core/testing';

import { AppauthService } from './appauth.service';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppauthService = TestBed.get(AppauthService);
    expect(service).toBeTruthy();
  });
});
