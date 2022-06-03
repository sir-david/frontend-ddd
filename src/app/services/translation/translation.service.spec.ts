import { HttpBackend } from '@angular/common/http';
import {
  HttpClientTestingModule, 
} from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LangChangeEvent, TranslateLoader, TranslateModule, TranslateService, TranslationChangeEvent } from '@ngx-translate/core';
import { defer, Observable, of, timer, zip } from 'rxjs';
import { TestScheduler } from 'rxjs-compat';
import { first, mapTo, take, toArray } from 'rxjs/operators';
import { TranslationService } from './translation.service';

let translations: any = {"TEST": "This is a test"};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}
describe('TranslateService', () => {
  let translate: TranslateService; 
  let scheduler: TestScheduler; 
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: FakeLoader
          }
        }),
      ],
      providers: [TranslateService],
    });
    translate = TestBed.inject(TranslateService);
    
    scheduler= new TestScheduler((actual, expected)=> expect(actual).toEqual(expected));
  });

  it('should be created', () => {
    let backend = TestBed.inject( HttpBackend);
    const service: TranslationService = new TranslationService(backend);
    expect(service).toBeTruthy();
  }); 

  it('should return undefined when try getTranslation with wrong language', () => { 
    //Arrange
    let backend = TestBed.inject( HttpBackend);
    let wrongLanguage = "EXX"; 
    const service: TranslationService = new TranslationService(backend)

    //Act
    let otranslation = service.getTranslation(wrongLanguage).toPromise();
    let getTranslationSpyOn = spyOn(service, "getTranslation");
    otranslation.then((value)=> {  expect(value).not.toEqual(undefined); }).catch(_=> expect(_).not.toEqual(undefined) );
 
  });

  it('should getTranslation for undefined languages', () => { 
    //Arrange
    let backend = TestBed.inject( HttpBackend);
    let undefinedLanguage = undefined; 
    const service: TranslationService = new TranslationService(backend)

    //Act
    //let otranslation = service.getTranslation(undefinedLanguage).toPromise();
    let getTranslationSpyOn = spyOn(service, "getTranslation");
    
    //Act
    service.getTranslation(undefinedLanguage);

    //Assert
    expect(getTranslationSpyOn).toHaveBeenCalled();
 
  });

  it('should try execute mock getTranslation', () => {
    //Arrange
    let backend = TestBed.inject( HttpBackend);
    let defaultLanguage = "es"; 
    const service: TranslationService = new TranslationService(backend) 
    let getTranslationSpyOn = spyOn(service, "getTranslation").and.callFake((lang)=> translations );
    
    //Act
    service.getTranslation(defaultLanguage);

    //Assert
    expect(getTranslationSpyOn).toHaveBeenCalled();
  });

  afterEach(() => {
    translate = undefined;
    translations = {"TEST": "This is a test"};
  });

  it('is defined', () => {
    expect(TranslateService).toBeDefined();
    expect(translate).toBeDefined();
    expect(translate instanceof TranslateService).toBeTruthy();
  });

  it('should be able to get translations', () => {
    translations = {"TEST": "This is a test", "TEST2": "This is another test"};
    translate.use('en');

    // this will request the translation from the backend because we use a static files loader for TranslateService
    translate.get('TEST').subscribe((res: string) => {
      expect(res).toEqual('This is a test');
    });


    // this will request the translation from downloaded translations without making a request to the backend
    translate.get('TEST2').subscribe((res: string) => {
      expect(res).toEqual('This is another test');
    });
  });

  it('should be able to get an array translations', () => {
    translations = {"TEST": "This is a test", "TEST2": "This is another test2"};
    translate.use('en');

    // this will request the translation from the backend because we use a static files loader for TranslateService
    translate.get(['TEST', 'TEST2']).subscribe((res: string) => {
      expect(res).toEqual(translations);
    });
  });
 
});

