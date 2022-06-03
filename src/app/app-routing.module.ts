import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { TabIdEnum } from '@siigo/siigo-library-enums';

import { TestPage, TestPageEC , EmptyRoutePage, TestPageFactory } from 'src/app/pages/page.index'

let pageFactory: TestPageFactory = new TestPageFactory();

const routes: Routes = [
  {path: 'archetype-angular/homepage', component: pageFactory.GetLocalizedComponent() as Type<any> },
  {path: '**', component: EmptyRoutePage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
