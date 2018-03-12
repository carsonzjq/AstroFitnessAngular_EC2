import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Trainer } from '../trainer';

@Component({
	selector: 'app-trainer-page',
	templateUrl: './trainer-page.component.html',
	styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {

	trainer = new Trainer();
	url = "http://54.167.6.110:8085/AstroFitness/rest/trainer/getByEmail/" + sessionStorage.getItem("userEmail");

	constructor(private user: UserService, private http: HttpClient) { }

	ngOnInit() {
		this.http.get(this.url).subscribe(
			data => this.trainer = data,
			err => console.log(err)
			)
	}

}
