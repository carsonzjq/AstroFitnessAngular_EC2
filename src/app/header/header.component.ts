import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	loggedIn;
	private accountType;

	constructor(private user: UserService) { 
		this.loggedIn = this.user.getLoggedIn();
		this.accountType = this.user.getAccountType();
	}

	ngOnInit() {
	}

	ngDoCheck(){
		this.user.updateLoggedIn();
		this.user.updateAccountType();
		this.loggedIn = this.user.getLoggedIn();
		this.accountType = this.user.getAccountType();
	}

	logout(){
		this.user.logout();
	}
}
