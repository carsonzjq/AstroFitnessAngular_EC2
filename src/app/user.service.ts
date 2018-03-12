import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Client } from './client';
import { Trainer } from './trainer';
import { Manager } from './manager';

@Injectable()
export class UserService {

	private LoggedIn: boolean;
	private accountType: string;
	private authURL: string;

	constructor(private http: HttpClient, private router: Router) {
		this.updateLoggedIn();
	}

	loginClient(email: string, password: string){
		this.authURL = "http://54.167.6.110:8085/AstroFitness/rest/client/authenticate";
		var client = new Client();
		client.email = email;
		client.password = password;

		return this.http.post(this.authURL, client);
	}

	loginTrainer(email: string, password: string){
		this.authURL = "http://54.167.6.110:8085/AstroFitness/rest/trainer/authenticate";
		var trainer = new Trainer();
		trainer.email = email;
		trainer.password = password;

		return this.http.post(this.authURL, trainer);
	}

	loginManager(email: string, password: string){
		this.authURL = "http://54.167.6.110:8085/AstroFitness/rest/manager/authenticate";
		var manager = new Manager();
		manager.email = email;
		manager.password = password;

		return this.http.post(this.authURL, manager);
	}

	logout(){
		sessionStorage.clear();
		this.updateLoggedIn();
		this.updateAccountType();
	}

	setLoggedIn(x: boolean){
		this.LoggedIn = x;
	}

	getLoggedIn(){
		return this.LoggedIn;
	}

	updateLoggedIn(){
		if(sessionStorage.getItem("userEmail") != null)
			this.setLoggedIn(true);
		else
			this.setLoggedIn(false);
	}

	setAccountType(type: string){
		this.accountType = type;
	}

	getAccountType(){
		return this.accountType;
	}

	updateAccountType(){
		this.accountType=sessionStorage.getItem("accountType");
	}
}
