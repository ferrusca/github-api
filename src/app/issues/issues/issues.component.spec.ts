import { async, ComponentFixture, TestBed, tick, fakeAsync, inject } from '@angular/core/testing';

import { IssuesComponent } from './issues.component';
import { IssuesService } from '../issues.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { mockIssue } from '../issue/issue.mock';

describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;
  let httpTestingController: HttpTestingController;
  let issuesService: any;
  let searchSpy;

  beforeEach(async(() => {
    issuesService = jasmine.createSpyObj('IssuesService', ['search']);
    searchSpy = issuesService.search.and.returnValue(of([mockIssue]));


    TestBed.configureTestingModule({
      declarations: [IssuesComponent],
      providers: [{
        provide: IssuesService,
        useValue: issuesService
      }],
      imports: [HttpClientTestingModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.get(HttpTestingController);
    issuesService = TestBed.get(IssuesService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make api GET request', fakeAsync(()  => {
    const event = {
      target: { value: 'my search' }
    };
    component.search(event);
    fixture.detectChanges();
    tick(700)
    expect(issuesService.search.calls.count()).toBe(1);
  }))
});
