import { Component, OnInit } from '@angular/core';
// import { ApiService } from 'src/app/core/api.service';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { FlatModel } from '../Model/flat.model';
import { FlatService } from '../Service/flat.service';


@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.css']
})
export class FlatComponent implements OnInit {

  model = new FlatModel();
  isError: boolean;
  message: string;

  constructor(private flatService: FlatService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit() {
    this.isError = false;
  }


  OnSubmit() {
    this.spinner.show();

    // if (this.model.Address === null) {
    //   this.notifier.notify('error', 'Заполните поле Address');
    //   this.isError = true;
    // }

    // if (this.model.Floor === null) {
    //   this.notifier.notify('error', 'Заполните поле Floor');
    //   this.isError = true;
    // }

    // if (this.model.Number === null) {
    //   this.notifier.notify('error', 'Заполните поле Floor');
    //   this.isError = true;
    // }

    // if (this.model.Price === null) {
    //   this.notifier.notify('error', 'Заполните поле Price');
    //   this.isError = true;
    // }

    // if (this.model.Rooms === null) {
    //   this.notifier.notify('error', 'Заполните поле Rooms');
    //   this.isError = true;
    // }



    if (this.isError === false) {

      this.flatService.addFlat(this.model).subscribe(
        data => {

          if (data.status === 200) {
            //nice 
            this.notifier.notify('success', 'Flat added');
            
            this.message = 'Welcome to the club buddy';

            setTimeout(() => {
              this.router.navigate(['/']);

            }, 3000);


            this.spinner.hide();

          }
          else {

            for (let i = 0; i < data.errors.length; i++) {
              this.notifier.notify('error', data.errors[i]);
            }


            console.log(data);
            this.spinner.hide();
          }


        }
      );

    }
    else {
      this.isError = false;
      this.spinner.hide();
    }
  }



}
