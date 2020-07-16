import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueComponent } from './issue.component';
import { mockIssue } from './issue.mock';
import { IssueNumberPipe } from '../pipes/issue-number.pipe';
import { LabelBackgroundPipe } from '../pipes/label-background.pipe';
import { IssueUserUsernamePipe } from '../pipes/issue-user.pipe';
import { IssueTimeAgoPipe } from '../pipes/issue-time-ago.pipe';

describe('IssueComponent', () => {
  let component: IssueComponent;
  let fixture: ComponentFixture<IssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueComponent, IssueNumberPipe, LabelBackgroundPipe, IssueUserUsernamePipe, IssueTimeAgoPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueComponent);
    component = fixture.componentInstance;
    component.issue = mockIssue;
    fixture.detectChanges();
  });

  it('should create and render issue title correctly', () => {
    expect(component).toBeTruthy();
    expect(fixture.nativeElement.querySelector('.issue-title').innerText).toEqual(mockIssue.title);
  });  
});
