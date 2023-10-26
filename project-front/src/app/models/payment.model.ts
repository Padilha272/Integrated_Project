import { Order } from "./order.model";

export class Payment{
    id: number = 0;
    moment: Date = new Date()
    order: Order = new Order()
}