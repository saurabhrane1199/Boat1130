import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../products.service';
import { Route, Router } from '@angular/router';
import { FireauthService } from '../fireauth.service';

@Component({
  selector: 'app-aproducts',
  templateUrl: './aproducts.component.html',
  styleUrls: ['./aproducts.component.css']
})
export class AproductsComponent implements OnInit {

  message = '';

  constructor(
    private productService: ProductsService,
    private router: Router,
    private auth: FireauthService
  ) { }

  productArray = [];

  ngOnInit(): void{
    this.productService.getProducts().subscribe(
      list=>{
        this.productArray = list.map(item=>{
          return {
            $key : item.key,
            ...item.payload.val()
          };
        });
        console.log(this.productArray)
      });
  }

  onEnroll(product){
    this.router.navigate(['/payment',product.$key])
  }

}
