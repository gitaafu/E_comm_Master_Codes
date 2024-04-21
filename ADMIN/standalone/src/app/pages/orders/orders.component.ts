import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/service/order.service';
import { CountService } from 'src/app/service/count.service';
import { RouterLink } from '@angular/router';
import { OrderlistComponent } from 'src/app/components/orderlist/orderlist.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule,RouterLink,OrderlistComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  orderDto: Order[] = [];
  orderCount:number;
  statuscount1:number;
  statuscount2:number;
  statuscount3:number;
 
  status:String;

  

  constructor(private orderService: OrderService,private service:CountService) {}

  ngOnInit(): void {
    this.getAllOrders();
    this.getOrderCount();
    this.getCount();
    
  }
  getCount() {
    this.getCountbyStatus('order received');
    this.getCountbyStatus1('order shipped');
    this.getCountbyStatus2('order dispatched');
  }
  getCountbyStatus(status: string) {
    this.orderService.getOrderCountByStatus(status).subscribe(
      (count: number) => {
        this.statuscount1= count;
   
         console.log(this.statuscount1);
      },
      (error: any) => {
        console.error('Error Fetching count of orders By status', error);
      }
    )
  }
  getCountbyStatus1(status: string) {
    this.orderService.getOrderCountByStatus(status).subscribe(
      (count: number) => {
        this.statuscount2= count;
       
         console.log(this.statuscount2);
      },
      (error: any) => {
        console.error('Error Fetching count of orders By status', error);
      }
    )
  }
  getCountbyStatus2(status: string) {
    this.orderService.getOrderCountByStatus(status).subscribe(
      (count: number) => {
        this.statuscount3= count;
      
         console.log(this.statuscount3);
      },
      (error: any) => {
        console.error('Error Fetching count of orders By status', error);
      }
    )
  }

  
  getOrderCount():any{
    this.service.getOrderCount().subscribe(
      (count: number) => {
        this.orderCount = count;
      },
      (error: any) => {
        console.error('Error fetching Order count:', error);
      }
    );
  }
  getAllOrders() {
    this.orderService.getAllOrders().subscribe(
      (orders: Order[]) => {
        this.orderDto = orders;
        console.log(orders);
      },
      error => {
        console.error('Error fetching orders:', error);
      }
    );
  }

  updateOrderStatus(orderId: number, newStatus: string) {
    this.orderService.updateOrderStatus(orderId, newStatus).subscribe(
      response => {
        console.log(response);
        // Update order status locally
        const updatedOrder = this.orderDto.find(order => order.orderId === orderId);
        if (updatedOrder) {
          updatedOrder.status = newStatus;
        }
      },
     
    );
  }

  
}