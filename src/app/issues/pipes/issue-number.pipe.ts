import { Pipe, PipeTransform } from '@angular/core';
import { Issue } from '../../models/issue.interface';

@Pipe({name: 'IssueNumber'})
export class IssueNumberPipe implements PipeTransform {
  transform(issue: Issue): string {
    if (issue.state === 'open') {
      return `#${issue.number} opened by`;
    }
  }
}