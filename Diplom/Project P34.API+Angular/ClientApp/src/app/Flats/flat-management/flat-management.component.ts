import { Component, OnInit } from '@angular/core';
import { FlatModel } from '../Model/flat.model';
import { FlatService } from '../Service/flat.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-flat-management',
  templateUrl: './flat-management.component.html',
  styleUrls: ['./flat-management.component.css']
})
export class FlatManagementComponent implements OnInit {

  Flats: FlatModel[] = [];
  constructor(private flatService: FlatService,
    private notifier: NotifierService) { }

  ngOnInit() {
        this.flatService.getEmptyFlats().subscribe((AllEmptyFlats: FlatModel[]) => {
        this.Flats=AllEmptyFlats;
        console.log(this.Flats);
        
       
    });
  }

}
