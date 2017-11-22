import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { NewComponent } from './question/new/new.component';
import { OneComponent } from './question/one/one.component';
import { AnswerComponent } from './question/answer/answer.component';
import { QuestionService } from './question.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    QuestionComponent,
    NewComponent,
    OneComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
