import { Component, OnInit } from '@angular/core';
import {DataService} from '../servies/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
data: any;
proarr:any;
  constructor( private dataService : DataService) { }

  ngOnInit(): void {
    this.dataService.getProductsList().subscribe({
      next: (data) => {
           console.log('success: ', data);
           this.data = data;
         console.log(this.data = data);
  },
  error : (msg) => {
    console.log('error:',msg);
  },
    });
    
  
}
addCard(category){
  // console.log(category);
  // localStorage.setItem('localCard',JSON.stringify(category));

  if(localStorage.getItem("productsData") == null)
        {
          this.proarr = [];
          this.proarr.push(category);
          localStorage.setItem("productsData" , JSON.stringify(this.proarr));
  
        }
        else
        {
          this.proarr.push(category);
          localStorage.setItem("productsData" , JSON.stringify(this.proarr));
        }
  
}

}
