import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {AngularFireDatabase,AngularFireList} from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firebase: AngularFireDatabase) { 
}

productList: AngularFireList<any>;


form = new FormGroup({
  $key: new FormControl(null),
  pname: new FormControl('', Validators.required),
  desc: new FormControl('', Validators.required),
  price: new FormControl('', Validators.required),
  image: new FormControl('', Validators.required)
 });


getProducts() {
  this.productList = this.firebase.list('products');
  return this.productList.snapshotChanges();
}
}
