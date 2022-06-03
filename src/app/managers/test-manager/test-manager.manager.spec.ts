import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { TestScheduler } from 'rxjs-compat';
import { ServicesMocks } from 'src/app/mocks/services.mocks';
import { TestModel, UserModel } from 'src/app/models/model.index';

import { TestManager } from './test-manager.manager';

describe('TestManager', () => {
  let scheduler: TestScheduler; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({ 
      imports: [  
      ],
      providers: ServicesMocks.managerProviders
    })
    .compileComponents();
    scheduler= new TestScheduler((actual, expected)=> expect(actual).toEqual(expected));
    
  }); 

  it('should be created', () => {
    const manager: TestManager = TestBed.inject(TestManager); 
    expect(manager).toBeTruthy(); 
  });

  it('get userInfo as an Observable', () => {
    scheduler.run( ({expectObservable}) => {
      //Arrange
      let modelExpected = new UserModel( );
      modelExpected.companyKey = "SiigoUnitTestCompany";
      modelExpected.emailUsuario = "developer@siigo.com";
      modelExpected.serialEmpresa="TheBestCompanyAtTheWorld"; 
      const manager: TestManager = TestBed.inject(TestManager); 
      const expectedUserMarble = '(a)';
      const expectedUserInfo = {a: modelExpected};
      let oUser$ = manager.getInfoUser();

      //Act
      manager.setInfoUser(modelExpected);

      // Assert 
      expectObservable(oUser$).toBe(expectedUserMarble,expectedUserInfo);
    }); 

  });
  it('should not navigate when click on button with callfake', () => { 
    //Arrange
    let router:Router = TestBed.inject(Router)
    const manager: TestManager = TestBed.inject(TestManager);
    const navigateSpy = spyOn(router, 'navigate').and.callFake(([],NavigationExtras)=> Promise.resolve(true));  
    
    //Act
    manager.clickButton("https://www.google.com","Test");

    //Assert
    expect(navigateSpy).toHaveBeenCalled();
  });
 
  it('shoud be valid test model', ()=>{
    let expectedResponse =  new TestModel ()
    expectedResponse.first = true;
    expectedResponse.second = 10;
    expectedResponse.third = []
    expectedResponse.fourth = {};
    expectedResponse.fifth = ''; 
    const manager: TestManager = TestBed.inject(TestManager);

    //Act
    var response = manager.getModalData(true,10,[], {}, '');

    //Assert
    expect(expectedResponse).toEqual(response);
  }); 

});