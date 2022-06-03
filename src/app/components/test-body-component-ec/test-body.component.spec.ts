import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesMocks } from 'src/app/mocks/services.mocks';

import { TestBodyComponentEC } from './test-body.component';

describe('TestBodyComponentEC', () => {
  let component: TestBodyComponentEC;
  let fixture: ComponentFixture<TestBodyComponentEC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBodyComponentEC ],
      providers: ServicesMocks.providers
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBodyComponentEC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});