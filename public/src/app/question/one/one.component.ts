import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  id;
  question;

  constructor(private _service: QuestionService, private _router: Router, private _route: ActivatedRoute) {this._route.paramMap.subscribe(params => {
    this.id = params.get("id");
  })}

  ngOnInit() {
    this._service.one(this.id, (res) => {
      this.question = res;
    })
    
  }

  logOut(){
    this._service.user = null;
    this._router.navigateByUrl("/")
  }

  like(idx){
    this.question.answers[idx].likes += 1;
    this.question.answers.sort((a, b)=>b.likes-a.likes);
    this._service.update(this.question, res => {})
  }

}
