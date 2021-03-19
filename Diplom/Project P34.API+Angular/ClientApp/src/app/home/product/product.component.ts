import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './product-view/service/product.service';
import { ProductItem } from './product-view/model/product-item.model';
import { WishListModel } from '../../Models/wishlist.model';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //viewProducts: ViewedProductModel[] = [];
  // model: ViewedProductModel = new ViewedProductModel();

  products: ProductItem[] = [];
  product: ProductItem = new ProductItem();

  listOfData: ProductItem[] = [];
  searchProd: string;
  searchResult: ProductItem[] = [];

  constructor(private productService: ProductService,
    private notifier: NotifierService) {



    // this.productService.searchProduct(this.productService.search).subscribe((data2: ProductItem[])=>{
    //   this.products = data2;
    //   this.listOfData = data2;
    //   this.searchResult = data2;

    // });

  }/*Constructor close*/

  // SearchProduct() {
  //     this.searchResult = this.listOfData.filter(
  //       t => t.name.toLowerCase().includes(this.searchProd.toLowerCase())
  //     );
  //   }


  wishlistArray: ProductItem[] = [];


  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data: ProductItem[]) => {
        this.products = data;
        this.listOfData = data;
      }
    );

    this.productService.es.subscribe(text => {
      this.productService.searchProduct(text).subscribe(data => {
        this.products = data;
      });
    });

    const tmp = localStorage.getItem("wishlist");
    if (tmp != null) {
      this.wishlistArray = JSON.parse(localStorage.getItem("wishlist"));
    }


    // this.productService.searchProduct(text).subscribe((data2:ProductItem[])=>{
    //   this.searchResult=data2;
    // });


  }

  viewProduct(id: string) {
    this.productService.temp = id;
  }

  wishList: WishListModel = new WishListModel();

  showStorage = [];  

  addToWishList(id: string) {
    this.showStorage = JSON.parse(localStorage.getItem("wishlist"));
    if(!this.showStorage.includes(id)){

      this.productService.getProductById(id).subscribe(
        (data: ProductItem) => {
          this.wishlistArray.push(data);
          localStorage.setItem("wishlist", JSON.stringify(this.wishlistArray));
          this.notifier.notify('success', 'Продукт добавлений у бажане');
        }
      );
    }
      else{
        this.notifier.notify('warning', 'Продукт уже знаходиться у бажаному!');
      }


  }




}
