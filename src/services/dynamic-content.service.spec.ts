import { TestBed } from '@angular/core/testing';

import { DynamicContentService } from './dynamic-content.service';

describe('DynamicContentService', () => {
  let service: DynamicContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
