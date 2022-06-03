import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesMocks } from 'src/app/mocks/services.mocks';

import { TestFooterComponent } from './test-footer.component';

describe('TestFooterComponent', () => {
  let component: TestFooterComponent;
  let fixture: ComponentFixture<TestFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFooterComponent ],
      providers: ServicesMocks.providers
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onClickDemo', () => {
    //Arrange
    let eventUrl = `https://dev.azure.com/SiigoDevOps/Siigo/_git/Siigo.Microfrontend.Archetype.Angular`;
    const fixture = TestBed.createComponent(TestFooterComponent);
    const component = fixture.componentInstance; 
    spyOn(component.onDemo, 'emit');
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('#watchDemoBtn');
 
    // Act
    button.dispatchEvent(new Event('click')); 
    fixture.detectChanges();
 
    //Assert
    expect(component.onDemo.emit).toHaveBeenCalledWith(eventUrl);
 });

 it('should emit onClickDocumentation', () => {
  //Arrange 
  let eventUrl = `https://alexandria.siigo.com/books/propuesta-de-arquetipo-para-microfrontend-mvp-modelo-vista-presentacion`;
   const fixture = TestBed.createComponent(TestFooterComponent);
   const component = fixture.componentInstance; 
   spyOn(component.onDocumentation, 'emit');
   const nativeElement = fixture.nativeElement;
   const button = nativeElement.querySelector('#watchDocumentationBtn');

  //Act
   button.dispatchEvent(new Event('click')); 
   fixture.detectChanges();

   //Assert
   expect(component.onDocumentation.emit).toHaveBeenCalledWith(eventUrl);
 });

});