import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  user;
  
  constructor(private _service:QuestionComponent, private _router:Router) { this.user = this._service.user}

  ngOnInit() {
  }

  home(){
    this._router.navigateByUrl("/dash");
  }

  logout(){
    this._service.user = null;
    this._router.navigateByUrl("/")
  }

}
