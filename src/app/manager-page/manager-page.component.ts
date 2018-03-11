import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';
import { Manager } from '../manager';

@Component({
  selector: 'app-manager-page',
  templateUrl: './manager-page.component.html',
  styleUrls: ['./manager-page.component.css']
})
export class ManagerPageComponent implements OnInit {

	manager = new Manager();
	url = "http://54.144.236.210:8085/AstroFitness/rest/manager/getByEmail/" + sessionStorage.getItem("userEmail");

	constructor(private user: UserService, private http: HttpClient) { }

	ngOnInit() {
		this.http.get(this.url).subscribe(
			data => this.manager = data,
			err => console.log(err)
			)
	}

	// ngDoCheck(){
	// 	console.log("docheck");
	// 	console.log(this.manager);
	// }
}
