import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../client';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { Appointements } from '../appointements';

@Component({
	selector: 'app-appointments',
	templateUrl: './appointments.component.html',
	styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

	client = new Client();
	trainers;
	url = "http://54.144.236.210:8085/AstroFitness/rest/appointment/get/" + sessionStorage.getItem("userEmail");

	constructor(private user: UserService, private http: HttpClient) { }
	public app =new Appointements();
	ngOnInit() {
		this.http.get(this.url).subscribe(
			data => this.app = data,
			err => console.log(err)
			)
	}

	fetchTrainers(){
		this.url="http://54.144.236.210:8085/AstroFitness/rest/appointment/get/all";
		this.http.get(this.url).subscribe(
			data => {
				this.trainers = data;
				console.log(this.trainers);
			})
	}
}
