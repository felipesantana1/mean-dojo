import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { NewComponent } from './question/new/new.component';
import { OneComponent } from './question/one/one.component';
import { AnswerComponent } from './question/answer/answer.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:LoginComponent},
  {path:"dash", pathMatch:"full", component:DashboardComponent},
  {path:"questions", children:[
    {path:"new", component:NewComponent},
    {path:":id", component:OneComponent},
    {path:":id/answer", component:AnswerComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
