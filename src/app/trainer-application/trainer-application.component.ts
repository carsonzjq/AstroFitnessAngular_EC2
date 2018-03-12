import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trainer } from '../trainer';
import { Router } from '@angular/router';

@Component({
	selector: 'app-trainer-application',
	templateUrl: './trainer-application.component.html',
	styleUrls: ['./trainer-application.component.css']
})
export class TrainerApplicationComponent implements OnInit {

	branches;
	passwords_are_different: boolean;
	private url;

	newUser = new Trainer();

	ngOnInit() {
		this.passwords_are_different = false;
		this.fetchGyms();
	}

	constructor(private http: HttpClient, private router: Router){

	}

	fetchGyms(){
		this.url="http://54.167.6.110:8085/AstroFitness/rest/gym/get/all";
		this.http.get(this.url).subscribe(
			data => {
				this.branches = data;
				console.log(this.branches);
			})
	}
	submit(){
		if (this.newUser.password === this.newUser.confirm) {
			console.log(this.newUser);
			for(var x in this.branches){
				if(this.branches[x].id == this.newUser.home_gym){
					this.newUser.home_gym = this.branches[x];
					break;
				}
			}

			this.url = "http://54.167.6.110:8085/AstroFitness/rest/trainer/post/newTrainer";
			this.http.post(this.url, this.newUser).subscribe(
				data => {
					console.log(data);
				},
				error => {
					console.log(error);
				}
			)
				this.router.navigate(['user-login']);
		} else {
			this.passwords_are_different = true;
		}
	}

}