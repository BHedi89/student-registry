import {Gender} from '../enum/gender.enum';

export interface Student {
  id?: number;
  name: string;
  email: string;
  age: number;
  gender: Gender;
}

