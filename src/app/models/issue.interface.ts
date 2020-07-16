import { User } from './user.interface';
import { Label } from './label.interface';

export type issueState = 'open' | 'closed' | 'all';

export interface Issue {
  created_at: string;
  labels: Label[];
  number: number;
  state: issueState;
  title: string;
  user: User;
  url: string;
}
