import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'test-header-component',
  templateUrl: './test-header.component.html',
  styleUrls: ['./test-header.component.scss']
})
export class TestHeaderComponent implements OnInit {

  public imgMicrofrontendSiigo = `${environment.pathAssets}images/logo-microfrontend-siigo.png`;

  constructor() { }

  ngOnInit(): void {
  }

}