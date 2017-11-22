import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../question.service';
import { Router } from '@angular/router';
import { Question } from '../../question';
import { Answer } from '../../answer';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  
  id;
  answer = new Answer();
  question;
  user;

  constructor(private _service:QuestionService, private _route: ActivatedRoute, private _router: Router) {
    this.user = this._service.user;
    this._route.paramMap.subscribe(params => {
    this.id = params.get("id");
  })}

  ngOnInit() {
    this._service.one(this.id, res => {
      this.question = res;
    });
  }

  onSubmit(id){
    this.answer.user = this._service.user;
    this._service.answer(id, this.answer, (res) => {
      this._router.navigateByUrl("/dash");
    })
  }

}
