import { Component, OnInit } from '@angular/core';
import { ProductItem } from './model/product-item.model';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  
  product: ProductItem = new ProductItem();

  constructor(private productService: ProductService) {

    this.productService.getProduct().subscribe(
      (data: ProductItem) => {
          this.product = data;
          console.log(this.product.id);
        }
      );

    
  }


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
