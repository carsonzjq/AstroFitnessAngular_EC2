import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-client-ui',
  templateUrl: './client-ui.component.html',
  styleUrls: ['./client-ui.component.css']
})
export class ClientUiComponent implements OnInit {
  public client={
    username:"",
    firstName:"",
    lastName:"",
    }
  constructor(private http: HttpClient) { }
 
  ngOnInit() {
  }

}
