import { Component, OnInit } from '@angular/core';
import { ApiResult } from '../../../Models/result.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { FlatService } from '../../Service/flat.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { FlatItem } from '../../Model/flat-item.model';
import { FlatModel } from '../../Model/flat.model';

@Component({
  selector: 'app-edit-flat',
  templateUrl: './edit-flat.component.html',
  styleUrls: ['./edit-flat.component.css']
})
export class EditFlatComponent implements OnInit {

  constructor(
    private flatService: FlatService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private notifier: NotifierService,
    private route: ActivatedRoute
  ) { }

  model: FlatModel;
  flatId: string;
  isError: boolean;



  submitForm () {
    this.spinner.show();


    if (this.model.Address === null) {
      this.notifier.notify('error', 'Please, enter email!');
      this.isError = true;
    }
    if (this.model.Floor === null) {
      this.notifier.notify('error', 'Please, enter full name!');
      this.isError = true;
    }
    if (this.model.Number === null) {
      this.notifier.notify('error', 'Please, enter phone!');
      this.isError = true;
    }
    if (this.model.Photo === null) {
      this.notifier.notify('error', 'Please, enter phone!');
      this.isError = true;
    }
    if (this.model.Price === null) {
      this.notifier.notify('error', 'Please, enter phone!');
      this.isError = true;
    }
    if (this.model.Rooms === null) {
      this.notifier.notify('error', 'Please, enter phone!');
      this.isError = true;
    }
    if (this.model.Sold === null) {
      this.notifier.notify('error', 'Please, enter phone!');
      this.isError = true;
    }
    if (this.model.SquareId === null) {
      this.notifier.notify('error', 'Please, enter phone!');
      this.isError = true;
    }
    


    if (this.isError === false) {
      this.flatService.editFlat(this.flatId, this.model).subscribe(
        (data: ApiResult) => {
          if (data.status === 200) {
            this.notifier.notify('success', 'Flat edited!');
            this.router.navigate(['/allflats']);
          }
        },
        (error) => {
          this.notifier.notify('error', 'Server error');
        }
      );
    }

    this.isError = false;
    this.spinner.hide();
  }





  ngOnInit() {
    this.spinner.show();
    this.route.params.subscribe((params: Params) => {
      this.flatId = params['id'];
    });
    this.flatService.getFlat(this.flatId).subscribe(
      (flat: FlatModel) => {
        this.model = flat;
        this.spinner.hide();
        console.log(this.model);
      }
    );

  }


}
