import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'test-body-component',
  templateUrl: './test-body.component.html',
  styleUrls: ['./test-body.component.scss']
})
export class TestBodyComponent implements OnInit {

  public imgLogoFramework = `${environment.pathAssets}images/logo-framework.png`;
  
  constructor() { }

  ngOnInit(): void {
  }

}