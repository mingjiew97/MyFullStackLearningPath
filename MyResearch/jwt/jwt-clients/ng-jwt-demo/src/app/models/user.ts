import {Authority} from './authority.enum';

class AuthorityType {
  id: number;
  type: Authority;
}

export class User {
  id?: number;
  name?: string;
  email?: string
  username: string;
  password: string;
  authorities?: AuthorityType[];
}
