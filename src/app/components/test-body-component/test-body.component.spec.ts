import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesMocks } from 'src/app/mocks/services.mocks';

import { TestBodyComponent } from './test-body.component';

describe('TestBodyComponent', () => {
  let component: TestBodyComponent;
  let fixture: ComponentFixture<TestBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBodyComponent ],
      providers: ServicesMocks.providers
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});