import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  proarr;
  constructor() { }

  ngOnInit(): void {
  
  if(localStorage.getItem("productsData") != null){
    this.proarr=JSON.parse(localStorage.getItem(" productsData"));
  }

}
}
