import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  constructor() { }

  ngOnInit():void {
    //BTS OF SIZE
    function makeActive(evt) {
      var i, sizeBtns;
      sizeBtns = document.getElementsByClassName("size-btn");
      for (i = 0; i < sizeBtns.length; i++) {
        sizeBtns[i].className = sizeBtns[i].className.replace(" active", "");
      }
      evt.currentTarget.className += " active";
    }
    document.getElementById("DefaultActive").click();
    //END OF THIS FUNCTION

  }


  

}
