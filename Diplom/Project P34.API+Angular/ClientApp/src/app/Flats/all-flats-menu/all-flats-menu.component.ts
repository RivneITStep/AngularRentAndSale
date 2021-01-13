import { Component, OnInit } from '@angular/core';
import { FlatModel } from '../Model/flat.model';
import { FlatService } from '../Service/flat.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-all-flats-menu',
  templateUrl: './all-flats-menu.component.html',
  styleUrls: ['./all-flats-menu.component.css']
})
export class AllFlatsMenuComponent implements OnInit {

  AllFlats: FlatModel[] = [];
  constructor(private flatService: FlatService,
    private notifier: NotifierService) { }

  ngOnInit() {
        this.flatService.getAllFlats().subscribe((AllFlats: FlatModel[]) => {
        this.AllFlats=AllFlats;
        console.log(this.AllFlats);
              
    });
  }


  

}
