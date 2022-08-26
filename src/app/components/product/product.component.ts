import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId: number = this.activatedRoute.snapshot.params['id'];

  product?: Product;

  constructor(private activatedRoute: ActivatedRoute, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProduct()
  }

  getProduct(): void{
    this.storeService.getResquestId(this.productId)
    .subscribe(product => {
      this.product = product
      console.log(product)
    })
  }

}
