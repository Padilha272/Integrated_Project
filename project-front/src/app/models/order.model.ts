import { OrderStatus } from '../enums/order-status.enum';
import { User } from './user.model'; 


export class Order {
  id: number = 0;
  orderDate: Date = new Date();
  user: User = new User();
  status: OrderStatus = OrderStatus.PENDING;
}
