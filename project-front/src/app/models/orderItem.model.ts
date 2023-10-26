import { Product } from "./product.model";
export class OrderItem{
    id: number = 0;
    quantity: number = 0;
    price: number = 0;
    product: Product = new Product()
}