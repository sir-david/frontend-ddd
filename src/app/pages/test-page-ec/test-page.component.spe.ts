import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestPageEC } from './test-page.component';

describe('TestPage', () => {
  let component: TestPageEC;
  let fixture: ComponentFixture<TestPageEC>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPageEC ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPageEC);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});