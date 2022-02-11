import { TestBed } from '@angular/core/testing';
import { IssuesService } from './issues.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('IssuesService', () => {
  let service: IssuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IssuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});