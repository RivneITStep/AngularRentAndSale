import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './product-view/service/product.service';
import { ProductItem } from './product-view/model/product-item.model';
import { ViewedProductModel } from 'src/app/Models/viewedProduct.model';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  viewProducts: ViewedProductModel[] = [];
  model: ViewedProductModel = new ViewedProductModel();
  
  products: ProductItem[] = [];
  product: ProductItem = new ProductItem();

  listOfData: ProductItem[] = [];
searchProd:string;
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



  ngOnInit() {
    this.productService.getProducts().subscribe(
      (data: ProductItem[]) => {
        this.products = data;
        this.listOfData = data;   
      }
    );

    this.productService.es.subscribe(text=>
      {
        this.productService.searchProduct(text).subscribe(data => {
          this.products = data;
        });
      });
      // this.productService.searchProduct(text).subscribe((data2:ProductItem[])=>{
      //   this.searchResult=data2;
      // });
        
   
  }

  viewProduct(id: string) {
    this.productService.temp = id;


    /*добавление в недавно просмотренние*/
    this.model.searchProductId = id;
    
    const token = localStorage.getItem('token');
    if (token !== null) {

      const jwtData = token.split('.')[1];
      const decodedJwtJsonData = window.atob(jwtData);
      const decodedJwtData = JSON.parse(decodedJwtJsonData);

      this.model.userId = decodedJwtData.id;
      this.productService.addViewedProduct(this.model).subscribe(
        data => {
          console.log(data);
          if (data.status === 200) {
            this.notifier.notify('success', 'ViewProduct is added!');

          } else {
            console.log(data.errors);
            for (let i = 0; i < data.errors.length; i++) {
              this.notifier.notify('error', data.errors[i]);
            }

          }
        })
    }
  }

  

}
