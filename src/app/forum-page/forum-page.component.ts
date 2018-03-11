import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forum } from '../forum';

@Component({
  selector: 'app-forum-page',
  templateUrl: './forum-page.component.html',
  styleUrls: ['./forum-page.component.css']
})
export class ForumPageComponent implements OnInit {

	posts;
	month;
	undate;
	addCharacter;
  private url;

	newForum = new Forum();
	
	ngOnInit() {
    this.fetchForum();
  }

	constructor(private http: HttpClient){}

	fetchForum(){
		this.url="http://54.144.236.210:8085/AstroFitness/rest/forum/get/all";
		this.http.get(this.url).subscribe(
			data => {
				this.posts = data;
				this.posts.sort(function(a,b) {return (a.comment_date > b.comment_date) ? 1 : ((b.comment_date > a.comment_date) ? -1 : 0);} ); 
				this.posts.sort(function(a,b) {return (a.comment_time > b.comment_time) ? 1 : ((b.comment_time > a.comment_time) ? -1 : 0);} ); 
				console.log(this.posts);
			})
  }
  
  submit(){
		console.log(this.newForum);
		this.formatDate();
		this.newForum.comment_time = new Date().toLocaleTimeString().slice(0,7);
		this.fetchForum();
		this.url = "http://54.144.236.210:8085/AstroFitness/rest/forum/post/newForum";
		this.http.post(this.url, this.newForum).subscribe(
			data => {
				console.log(data);
			},
			error => {
				console.log(error);
			}
			)

			this.fetchForum();

	}
	
	formatDate(){
		this.undate = new Date().toLocaleDateString();

		this.addCharacter = 0;

		switch(this.undate.slice(0,2)){
			case '1/':
				this.month = 'January';
				break;
			case '2/':
				this.month = 'February';
				break;				
			case '3/':
				this.month = 'March';
				break;
			case '4/':
				this.month = 'April';
				break;		
			case '5/':
				this.month = 'May';
				break;
			case '6/':
				this.month = 'June';
				break;				
			case '7/':
				this.month = 'July';
				break;
			case '8/':
				this.month = 'August';
				break;	
			case '9/':
				this.month = 'September';
				break;
			case '10':
				this.month = 'October';
				this.addCharacter = 1;
				break;				
			case '11':
				this.month = 'November';
				this.addCharacter = 1;
				break;
			case '12':
				this.month = 'December';
				this.addCharacter = 1;
				break;		
			}

			this.newForum.comment_date = this.month + " " + 
			this.undate.slice(2+this.addCharacter,4+this.addCharacter) + ", " +
			this.undate.slice(5+this.addCharacter,9+this.addCharacter);
			this.fetchForum();
	}

	refresh(){
		this.fetchForum();
	}

}
