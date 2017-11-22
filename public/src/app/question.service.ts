import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class QuestionService {

  user;

  constructor(private _http: Http) { }

  all(callBack){
    this._http.get("/all").subscribe(
      (res) => {
        callBack(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  };

  one(id, callBack){
    this._http.get("/one/"+id).subscribe(
      (res) => {
        callBack(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  };

  create(data, callBack){
    console.log(data);
    this._http.post("/question", data).subscribe(
      (res) => {
        callBack(res.json());
      },
      (err) => {
        console.log(err);
      }
    );
  };

  answer(id, data, callBack){
    this._http.post("/question/"+id, data).subscribe(
      (res) => {
        callBack(res.json());
      },
      (err) => {
        console.log(err.json());
      }
    );
  };

  update(data, callBack){
    this._http.put("/question/"+data._id+"/like", data).subscribe(
      (res) => {
        callBack(res.json());
      },
      (err) => {
        callBack(err.json());
      }
    )
  }
}
