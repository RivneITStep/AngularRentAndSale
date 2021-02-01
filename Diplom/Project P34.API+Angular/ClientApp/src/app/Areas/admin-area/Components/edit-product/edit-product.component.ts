import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { ProductManagerService } from '../../Services/product-manager.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private notifier: NotifierService, private productService: ProductManagerService) { }


  ngOnInit() {
    
  }

}
