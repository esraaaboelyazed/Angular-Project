import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../servies/data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  index ;
  proarr:any;
 productDetails:any = {} ; 
  constructor(ActivatedRoute :ActivatedRoute , dataService : DataService) {
   this.index = ActivatedRoute.snapshot.paramMap.get("id"); 
 
  dataService.getProductsList().subscribe((data)=>{
    this.productDetails = data[this.index]
  });

  }

  ngOnInit(): void {
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
