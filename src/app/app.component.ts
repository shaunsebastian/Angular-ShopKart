import { Component } from '@angular/core';
import{IProduct} from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:IProduct[] = [
    {
      id: 'iph123',
      title: "Iphone8",
      description: "This is iphone8",
      price: 100,
      imgUrl: "https://www.shopwish.in/wp-content/uploads/2021/01/iphone-9.png"
    },
    {
      id: 'sam124',
      title: "Samsung s20",
      description: "This is samsung s20",
      price: 200,
      imgUrl: "https://bingkart.com/4642-large_default/samsung-galaxy-s20-cosmic-gray-8gb-ram-128gb-storage.jpg"
    }
  ]
  cart = []
}