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


remove(product) {
  this.proarr = JSON.parse(localStorage.getItem('productsData'));
  for (let i = 0; i < this.proarr.length; i++) {
    
      if (this.proarr[i]['id'] == product.id) {
        this.proarr.splice(i, 1);
        localStorage.setItem('productsData', JSON.stringify(this.proarr));
      return true;
      }
     
    }
}

Prices() {
  let count = 0;
  if (!localStorage.getItem('productsData')) {
    return 0;
  }
  this. proarr = JSON.parse(localStorage.getItem('productsData'));
  for (let j = 0; j < this.proarr.length; j++) {
    count +=
      this. proarr[j]['price'];
  }
  return +count.toFixed(2);
}

}
