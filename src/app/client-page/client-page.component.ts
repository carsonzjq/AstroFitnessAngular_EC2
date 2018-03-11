import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user.service';
import {Client} from '../client';
import {ForumPageComponent} from '../forum-page/forum-page.component';
//import {AppointmentsComponent} from '../appointments/AppointmentsComponent'

@Component({
	selector: 'app-client-page',
	templateUrl: './client-page.component.html',
	styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

	client = new Client();
	url = "http://54.144.236.210:8085/AstroFitness/rest/client/getByEmail/" + sessionStorage.getItem("userEmail");

	constructor(private user: UserService, private http: HttpClient) { }

	ngOnInit() {
		this.http.get(this.url).subscribe(
			data => this.client = data,
			err => console.log(err)
			)
	}

}
