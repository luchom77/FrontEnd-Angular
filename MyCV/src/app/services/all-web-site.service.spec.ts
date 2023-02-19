import { TestBed } from '@angular/core/testing';

import { AllWebSiteService } from './all-web-site.service';

describe('AllWebSiteService', () => {
  let service: AllWebSiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllWebSiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
