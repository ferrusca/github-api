import { Component, Input } from '@angular/core';
import { Issue } from '../../models/issue.interface';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent {

  @Input() issue: Issue;

  constructor() { }

}
