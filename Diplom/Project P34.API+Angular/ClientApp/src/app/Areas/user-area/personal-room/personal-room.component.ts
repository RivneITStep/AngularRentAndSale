import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './service/user.service';
import { UserItem } from './models/user-item.model';

@Component({
  selector: 'app-personal-room',
  templateUrl: './personal-room.component.html',
  styleUrls: ['./personal-room.component.css']
})
export class PersonalRoomComponent implements OnInit {

  constructor( private userService: UserService,
    private notifier: NotifierService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute
    ) {
      const token = localStorage.getItem('token');
      if (token !== null) {
        const jwtData = token.split('.')[1];
        const decodedJwtJsonData = window.atob(jwtData);
        const decodedJwtData = JSON.parse(decodedJwtJsonData);
        this.user.id = decodedJwtData.id;
        this.user.email = decodedJwtData.email;
        if(decodedJwtData.phone !== null){
          this.user.phone = decodedJwtData.phone;
        }
        this.user.age = decodedJwtData.age;
        this.user.fullName = decodedJwtData.fullName;

        this.userService.getUser(decodedJwtData.id).subscribe(
          (data: UserItem) => {
            this.user = data;
          }
        );

      }
     }

  userId: string;
  isError: boolean;


  user: UserItem = new UserItem();

  ngOnInit() {
     
      
    
  }


  


  



}
