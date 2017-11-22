import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user;
  questions;

  constructor(private _service: QuestionService, private _router:Router){
    this.user = this._service.user;
  }

  ngOnInit() {
    this._service.all(res => {
      this.questions = res;
    });
  }

  logOut(){
    this._service.user = null;
    this._router.navigateByUrl("/");
  }

  AddQ(){
    this._router.navigateByUrl("/questions/new");
  }

}
