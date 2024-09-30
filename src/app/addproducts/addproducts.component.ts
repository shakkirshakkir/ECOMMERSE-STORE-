import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent {
  ProductForm=this.fb.group({
    title:['',[Validators.required,Validators.minLength(3)]],
    category:['',[Validators.required,Validators.pattern("a-zA-Z+")]],
    description:['',[Validators.required,Validators.pattern("a-zA-Z0-9 +")]],
    price:['',[Validators.required,Validators.pattern("0-9+")]]
  })
  constructor(private fb:FormBuilder){

  }
submit(){
  if(this.ProductForm.valid){
  console.log(this.ProductForm.value.title)
  console.log(this.ProductForm.value.category)
  console.log(this.ProductForm.value.description)
  console.log(this.ProductForm.value.price)
  localStorage.setItem(String(this.ProductForm.value.title),String(this.ProductForm.value))
  }
  else{
    alert("invalid form")
    if(this.ProductForm.get("title")?.invalid){
      alert("invalid title")
    }
    if(this.ProductForm.get("title")?.invalid){
      alert("invalid category")
    }
    if(this.ProductForm.get("title")?.invalid){
      alert("invalid descrption")
    }
    if(this.ProductForm.get("title")?.invalid){
      alert("invalid price")
    }
  }

  
  }
  


}
