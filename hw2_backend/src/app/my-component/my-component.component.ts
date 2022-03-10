import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

interface DataModel {
  _id: string;
  publisherName: string;
  //content: object;
}


@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  //url = 'https://jsonplaceholder.typicode.com/users'
  url = 'http://localhost:4231/api/news'


  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((result: any)=> {
      console.log(result);
      //this.data = result;
      console.log(result[0].publisherName);
    })
   }

  ngOnInit() {
  }
}

