import {Customer} from './Customer';
import {Coffee} from './Coffee';

export interface Order {
  id: number;
  customer: Customer;
  coffee: Coffee;
}
