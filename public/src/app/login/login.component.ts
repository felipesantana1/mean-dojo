import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;

  constructor(private _service:QuestionService, private _router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this._service.user = this.user;
    this._router.navigateByUrl("/dash");
  }

}
