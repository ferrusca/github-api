import { Issue } from '../../models/issue.interface';

export const mockIssue: Issue = {
  user: {login: 'foo', html_url: 'https://github.com/heecheolman'},
  labels: [
    {color: 'e7e7e7',
    name: 'CLA Signed',
    url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed'}
  ],
  created_at: '2020-07-10T01:41:56Z',
  state: 'open',
  title: 'Bug: Functional component rerender when same state',
  number: 1,
  url: 'https://api.github.com/repos/facebook/react/issues/19305'
}