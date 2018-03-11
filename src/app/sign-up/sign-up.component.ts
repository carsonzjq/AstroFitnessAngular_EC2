import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	branches;
	private url;
	newUser = new Client();
	passwords_are_different: boolean;
	ngOnInit() {
		this.fetchGyms();
		this.passwords_are_different = false;
	}

	constructor(private http: HttpClient, private router: Router){

	}

	fetchGyms(){
		this.url="http://54.144.236.210:8085/AstroFitness/rest/gym/get/all";
		this.http.get(this.url).subscribe(
			data => {
				this.branches = data;
				console.log(this.branches);
			})
	}

	check(){
		console.log(this.newUser);
	}

	checkBranch(){
		console.log(this.newUser);
	}

	submit(){
		console.log(this.newUser);
		if (this.newUser.password === this.newUser.confirm) {
			for(var x in this.branches){
				if(this.branches[x].id == this.newUser.client_gym){
					this.newUser.client_gym = this.branches[x];
					break;
				}
			}
		
			this.url = "http://54.144.236.210:8085/AstroFitness/rest/client/post/newClient";
			this.http.post(this.url, this.newUser).subscribe(
				data => {
					console.log(data);
				},
				error => {
					console.log(error);
				}
			);

			this.router.navigate(['user-login']);

		} else {
			this.passwords_are_different = true;
		}
	}

	submitted = false;
	//onSubmit() { this.submitted = false;}

	confirm() {
		if (this.newUser.password === this.newUser.confirm) {
			return true;
		} else {
			return false;
		}
	   }
}