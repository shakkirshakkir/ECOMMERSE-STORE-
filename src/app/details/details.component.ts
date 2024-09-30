import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataserviceService} from '../services/dataservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  pid:any;
  prod:any=null
  
  constructor(private ar:ActivatedRoute,private ds:DataserviceService){
    this.ar.params.subscribe(res=>{
    console.log(res['id'])
    this.pid=res['id']
    this.ds.getProduct(this.pid).then(res=>res.json()).then(data=>this.prod=data)
  })
}

  }


