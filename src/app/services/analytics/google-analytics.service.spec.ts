import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnalyticsService, ConfigurationProviderService } from '@siigo/siigo-library-core-angular';
import { ServicesMocks } from 'src/app/mocks/services.mocks';

import { GoogleAnalyticsService } from './google-analytics.service';

describe('GoogleAnalyticsService', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: ServicesMocks.providers
    })
    .compileComponents();
  }); 

  it('should create', () => { 
    //Arrange
    const ganalyticsService: GoogleAnalyticsService = TestBed.inject(GoogleAnalyticsService);
    
    //Act
    ganalyticsService.initializerApp();

    //Assert
    expect(ganalyticsService).toBeTruthy(); 
  }); 
  
  it('should execute initializer app in environment producction', () => { 
    //Arrange 
    let configurationProvider =  TestBed.inject(ConfigurationProviderService);
    let analyticsService =  TestBed.inject(AnalyticsService);    
    const forceProductionHelpItemSpy = spyOn(configurationProvider, 'getUserInformation').and.callFake((): any => {
      const userInformation = { 
          HelpItems : [
          {
              Name: 'Production',
              Path: "false",
              ClassCss: "",
              Visible: true
          }
      ]};  
      return userInformation;
    });  
    const ganalyticsService: GoogleAnalyticsService = new GoogleAnalyticsService(configurationProvider,analyticsService); 
    
      //Act
    ganalyticsService.initializerApp();

    //Assert
    expect(ganalyticsService.initializerApp).toBeTruthy(); 
  });

  it('should execute initializer app without helpItems', () => { 
    //Arrange  
    let analyticsService =  TestBed.inject(AnalyticsService);
    let  configurationProviderService: ConfigurationProviderService = TestBed.inject(ConfigurationProviderService);
    const forceUndefinedHelpItemsSpy = spyOn(configurationProviderService, 'getUserInformation').and.callFake((): any => {
      const userInformation = { 
          HelpItems : undefined,
          helpItems : undefined
      };
       
      return userInformation;
    });      
    const ganalyticsService: GoogleAnalyticsService = new GoogleAnalyticsService(configurationProviderService,analyticsService); 
  
    //Act
    ganalyticsService.initializerApp();

    //Assert
    expect(ganalyticsService).toBeTruthy(); 
  });
  

  it('should log event', () => { 
    //Arrange  
    let analyticsService =  TestBed.inject(AnalyticsService);
    let  configurationProviderService: ConfigurationProviderService = TestBed.inject(ConfigurationProviderService);
    const emmiterForAnalyticsService = spyOn(analyticsService, 'eventEmitter'); 
    const ganalyticsService: GoogleAnalyticsService = new GoogleAnalyticsService(configurationProviderService,analyticsService); 
  
    //Act
    ganalyticsService.logEvent("UnitTest should log event", {type: 'Unit'});

    //Assert
    expect(emmiterForAnalyticsService).toHaveBeenCalled(); 
  }); 
});