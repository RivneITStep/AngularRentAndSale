import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  constructor() {
    this.showStorage = JSON.parse(localStorage.getItem("wishlist"));
  }



  public showStorage = "";

  public tmp = "";

  removeFromWishList(){
    this.showStorage
  }

  ngOnInit() {
  }

}
