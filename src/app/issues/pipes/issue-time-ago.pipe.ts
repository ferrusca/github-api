import * as moment from 'moment';
import { Pipe, PipeTransform } from '@angular/core';
import { DEFAULT_LOCALE } from '../../const';
import { Issue } from '../../models/issue.interface';

@Pipe({name: 'IssueTimeAgo'})
export class IssueTimeAgoPipe implements PipeTransform {
  transform(issue: Issue): string {
    const { created_at } = issue;
    moment.locale(DEFAULT_LOCALE);

    return moment(new Date(created_at)).fromNow()
  }
}