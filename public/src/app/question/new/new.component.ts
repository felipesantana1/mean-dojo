import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../question.service';
import { Router } from '@angular/router';
import { Question } from '../../question';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  question = new Question();

  data;

  constructor(private _service: QuestionService, private _router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.question);
    this._service.create(this.question, (res)=>{
      this._router.navigateByUrl("/dash")
    });
  }

  home(){
    this._router.navigateByUrl("/dash");
  }

  logOut(){
    this._service.user = null;
    this._router.navigateByUrl("/")
  }

}
