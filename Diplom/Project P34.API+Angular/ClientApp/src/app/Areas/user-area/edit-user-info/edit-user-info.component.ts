import { Component, OnInit } from '@angular/core';
import { UserService } from '../personal-room/service/user.service';
import { UserItem } from '../personal-room/models/user-item.model';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiResult } from '../../../Models/result.model';
import { ApiService } from '../../../core/api.service';


@Component({
  selector: 'app-edit-user-info',
  templateUrl: './edit-user-info.component.html',
  styleUrls: ['./edit-user-info.component.css']
})
export class EditUserInfoComponent implements OnInit {

  constructor(private userService: UserService ) { 

    const token = localStorage.getItem('token');
      if (token !== null) {
        const jwtData = token.split('.')[1];
        const decodedJwtJsonData = window.atob(jwtData);
        const decodedJwtData = JSON.parse(decodedJwtJsonData);
        this.user.id = decodedJwtData.id;

        this.userService.getUser(decodedJwtData.id).subscribe(
          (data: UserItem) => {
            this.user = data;
          }
        );
    }
  }

  ngOnInit() {

  }

  user: UserItem = new UserItem();

  


}
