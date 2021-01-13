import { Component, OnInit } from '@angular/core';
import { FlatModel } from '../Model/flat.model';
import { FlatService } from '../Service/flat.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-sold-flats-list',
  templateUrl: './sold-flats-list.component.html',
  styleUrls: ['./sold-flats-list.component.css']
})
export class SoldFlatsListComponent implements OnInit {

  SoldFlats: FlatModel[] = [];
  constructor(private flatService: FlatService,
    private notifier: NotifierService) { }

  ngOnInit() {
        this.flatService.getSoldFlats().subscribe((AllFlats: FlatModel[]) => {
        this.SoldFlats=AllFlats;
        console.log(this.SoldFlats);
      
       
    });
  }

}
