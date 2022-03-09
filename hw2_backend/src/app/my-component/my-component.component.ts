import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  //url = 'https://jsonplaceholder.typicode.com/users'
  url = 'http://localhost:4231/api/news'

  constructor(private http: HttpClient) {
   }

  ngOnInit() {
    this.http.get(this.url).subscribe((result)=> {
      console.log(result)
    })
  }

}

