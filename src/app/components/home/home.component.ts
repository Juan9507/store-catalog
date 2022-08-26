import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.storeService.getRequest()
    .subscribe(products => {
      this.products = products;
      console.log(products);
    })
  }

}
