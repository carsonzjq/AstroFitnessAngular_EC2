import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../client';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Appointment } from '../appointment';
import { Trainer } from '../trainer';

@Component({
	selector: 'app-appointments',
	templateUrl: './appointments.component.html',
	styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

	public client = new Client();
	public trainer = new Trainer();
	public appointment = new Appointment();
	public clients;
	public trainers;
	public appointments;
	public sessions;
	url = "http://54.167.6.110:8085/AstroFitness/rest/appointment/get/" + sessionStorage.getItem("userEmail");

	constructor(private user: UserService, private http: HttpClient) { }
	ngOnInit() {
		this.fetchAppointments();
		this.fetchTrainers();
	}

	fetchTrainers(){
		this.url="http://54.167.6.110:8085/AstroFitness/rest/trainer/get/all";
		this.http.get(this.url).subscribe(
			data => {
				this.trainers = data;
				console.log(this.trainers);
			})
	}

	
	fetchAppointments(){
		this.url="http://54.167.6.110:8085/AstroFitness/rest/appointment/get/all";
		this.http.get(this.url).subscribe(
			data => {
				this.appointments = data;
				console.log(this.appointments);
			})
  }
}
