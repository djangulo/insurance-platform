import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {
  HttpClient,
  HttpErrorResponse
} from '@angular/common/http';

import { PolicyService } from './policy.service';

describe('InsurancePolicyService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PolicyService]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: PolicyService = TestBed.get(PolicyService);
    expect(service).toBeTruthy();
  });
});
