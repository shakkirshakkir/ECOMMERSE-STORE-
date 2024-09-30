import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DataserviceService} from '../services/dataservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products:any=[]
  constructor(private rt:Router,private ds:DataserviceService){
    this.ds.getData().then(res=>res.json()).then(data=>this.products=data)

  }

  clicked(e:any){
    console.log(e.target.id)
    this.rt.navigate(['det',e.target.id])
  }
  

}
