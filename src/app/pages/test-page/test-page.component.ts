import { Component, OnInit } from '@angular/core';
import { UtilsService } from '@siigo/siigo-library-core-angular';
import { TestManager } from "../../managers/manager.index";

@Component({
  selector: 'test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPage implements OnInit {

  constructor(private utilsServices: UtilsService, private testManager: TestManager) { }

  ngOnInit(): void {
    const oUser = this.utilsServices.getInfoUser();
    this.testManager.setInfoUser(oUser);
  }

  onClickDemo(event) {
    this.testManager.clickButton(event, 'Ver_Demo_Arquetipo-Angular-MF');
  }

  onClickDocumentation(event) {
    this.testManager.clickButton(event, 'Ver_Documentación_Arquetipo-Angular-MF');
  }

}