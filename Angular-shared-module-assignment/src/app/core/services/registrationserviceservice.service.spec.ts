import { TestBed } from '@angular/core/testing';

import { RegistrationserviceserviceService } from './registrationserviceservice.service';

describe('RegistrationserviceserviceService', () => {
  let service: RegistrationserviceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationserviceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
