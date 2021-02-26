import { Component, OnInit } from '@angular/core';
import { CategoryManagerService } from '../../Services/category-manager.service';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { CategoryItem } from '../../Models/category-item.model';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {


  listOfData: CategoryItem[] = [];

  constructor(private categoryServise: CategoryManagerService,
    private notifier: NotifierService,
    private router: Router) { }

  ngOnInit() {
    this.categoryServise.getAllCategories().subscribe((AllCategories: CategoryItem[]) => {
      this.listOfData = AllCategories;
      console.log(this.listOfData);})


      /**/
      document.getElementById("defActionOpen").click();
      function chooseAction(evt, actionName) {
        var i, tabcontentAction, tablinksAction;

        tabcontentAction = document.getElementsByClassName("tabcontent-action");
        for (i = 0; i < tabcontentAction.length; i++) {
          tabcontentAction[i].style.display = "none";
        }

        tablinksAction = document.getElementsByClassName("tablink-action");
        for (i = 0; i < tablinksAction.length; i++) {
          tablinksAction[i].className = tablinksAction[i].className.replace(" active", "");
        }

        document.getElementById(actionName).style.display = "block";
        evt.currentTarget.className += " active";
      }

      document.getElementById("defListOpen").click();
      function openList(evt, listName) {
        var i, tabcontentList, tablinkList;

        tabcontentList = document.getElementsByClassName("tabcontent-list");
        for (i = 0; i < tabcontentList.length; i++) {
          tabcontentList[i].style.display = "none";
        }

        tablinkList = document.getElementsByClassName("tablink-list");
        for (i = 0; i < tablinkList.length; i++) {
          tablinkList[i].className = tablinkList[i].className.replace(" active", "");
        }

        document.getElementById(listName).style.display = "block";
        evt.currentTarget.className += " active";
      }
    
  }

}
