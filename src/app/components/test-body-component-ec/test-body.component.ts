import { Component, OnInit } from '@angular/core';
import { IComponent } from 'src/app/dependencyCollection';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'test-body-component-ec',
  templateUrl: './test-body.component.html',
  styleUrls: ['./test-body.component.scss']
})
export class TestBodyComponentEC implements OnInit, IComponent {

  public imgLogoFramework = `${environment.pathAssets}images/logo-framework.png`;
  
  constructor() { }

  ngOnInit(): void {
  }

}