import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { BehaviorSubject } from "rxjs";
import { TestModel } from "src/app/models/model.index";

import { UserModel } from "./../../models/info-user/user.model";
import { GoogleAnalyticsService } from './../../services/service.index';

@Injectable({
  providedIn: "root",
})

export class TestManagerEC {

  private oUser$ = new BehaviorSubject<UserModel>(new UserModel());

  getInfoUser() {
    return this.oUser$.asObservable();
  }

  setInfoUser(value:UserModel) {
    this.oUser$.next(value);
  }

  constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService) {}

  clickButton(url: string, eventName: string){
    this.getInfoUser();
    this.registerAnalyticsEvent(eventName); 
    this.router.navigate([]).then(nav => window.open(url, '_blank'));
  }

  private registerAnalyticsEvent(eventName){
    this.googleAnalyticsService.logEvent(
      eventName,
      {
        firsttimeuser: true,
        Company_Key: this.oUser$.value.companyKey,
        Serial_Empresa: this.oUser$.value.serialEmpresa,
        Email_Usuario: this.oUser$.value.emailUsuario,
      }
    );
  }

  public getModalData(first:boolean, second:number, third:Array<number>, fourth: object, fifth: string){
    let response =  new TestModel ()
    response.first = true;
    response.second = 10;
    response.third = []
    response.fourth = {};
    response.fifth = '';
    return response;
  }
}
