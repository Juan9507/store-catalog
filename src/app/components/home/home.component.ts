import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { StoreService } from 'src/app/services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];
  page: number = 1
  count: number = 0
  pageSize: number = 10
  pageSizes: number[] = [3, 6, 9, 12]

  constructor(private storeService: StoreService, private router: Router) { }

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

  buyProduct(id: number){
    this.router.navigate(['product/' + id])
  }

  onPageDataChange(event: any){
    this.page = event
    this.getProducts()
    window.scrollTo(0,0)
  }

  onPageSizeChange(event: any): void{
    this.pageSize = event.target.value
    this.page = 1
    this.getProducts()
  }

}
