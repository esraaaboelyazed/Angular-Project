import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  proarr;
  // carttotal:any;

  constructor() { }

  ngOnInit(): void {
  

  if(localStorage.getItem("productsData") != null){
    this.proarr=JSON.parse(localStorage.getItem("productsData"));
  }

}

remove(id){
console.log(id);
let results:any = this.proarr.slice(id);
localStorage.setItem('productsData',JSON.stringify(results));
this.proarr= results;
}
// totalPrice(){
// this.proarr.foreach(item=>{
//   this.carttotal+=(item.price)
// })
// }

}
