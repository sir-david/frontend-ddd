import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServicesMocks } from 'src/app/mocks/services.mocks';

import { TestHeaderComponent } from './test-header.component';

describe('TestHeaderComponent', () => {
  let component: TestHeaderComponent;
  let fixture: ComponentFixture<TestHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestHeaderComponent ],
      providers: ServicesMocks.providers
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});