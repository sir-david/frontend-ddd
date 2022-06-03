import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'test-footer-component',
  templateUrl: './test-footer.component.html',
  styleUrls: ['./test-footer.component.scss']
})
export class TestFooterComponent implements OnInit {

  @Output() public onDemo: EventEmitter<string> = new EventEmitter();
  @Output() public onDocumentation: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickDemo() {
    let url = `https://dev.azure.com/SiigoDevOps/Siigo/_git/Siigo.Microfrontend.Archetype.Angular`;
    this.onDemo.emit(url);
  }

  onClickDocumentation() {
    let url = `https://alexandria.siigo.com/books/propuesta-de-arquetipo-para-microfrontend-mvp-modelo-vista-presentacion`;
    this.onDocumentation.emit(url);
  }

}