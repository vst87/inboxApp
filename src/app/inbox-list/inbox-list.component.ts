import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import sampleData from '../../assets/inboxData.json';

@Component({
  selector: 'app-inbox-list',
  templateUrl: './inbox-list.component.html',
  styleUrls: ['./inbox-list.component.scss']
})
export class InboxListComponent implements OnInit {

  constructor(private httpService: HttpClient) { }
  myData: object = [];
  actualData: object = [];
  ChatData: any = sampleData;

  ngOnInit() {
  //  this.getPingData();
  
  }

  clickMe(){
    console.log("Clicked");
  }


  getPingData(){
    this.httpService.get('https://reqres.in/api/users?page=2').subscribe(
      data => {
        this.myData = data as object[];
        this.actualData = data["data"];
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

}
