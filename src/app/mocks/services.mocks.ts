import { Router } from "@angular/router";
import { AnalyticsService, ConfigurationProviderService } from "@siigo/siigo-library-core-angular";
import { AnalyticsNameEnum } from "@siigo/siigo-library-enums";

import { GoogleAnalyticsService } from "../services/service.index";

export class ServicesMocks {

    static ConfigurationProviderServiceMock = {
        getUserInformation(): any {
            const userInformation = { 
                HelpItems : [
                {
                    Name: 'QAEnviroment',
                    Path: "true",
                    ClassCss: "",
                    Visible: true
                }
            ]}; 
            return userInformation;
        }
    } 

    static RouterMock = { 
      navigate: (commands: any[]) => Promise.resolve(true)
    };
    
    static AnalyticsService = { 
        eventEmitter(eventName: string, eventParams: any, analyticsNameEnum?: AnalyticsNameEnum): void {
            console.log(`AnalyticsService: Event Triggered: ${eventName} with params ${eventParams} and this enum: ${analyticsNameEnum}`); 
        }
    }

    static GoogleAnalyticsServiceMock = {
        logEvent(eventName:string, params:any) {  
            console.log(`GoogleAnalyticsServiceMock: Event Triggered: ${eventName} with params ${params}`); 
        },
        initializerApp():void { 
            console.log(`GoogleAnalyticsServiceMock: Service should be created`);
        }
    }
 
    static providers= [ 
        { provide: ConfigurationProviderService, useValue: ServicesMocks.ConfigurationProviderServiceMock},
        { provide: Router, useValue: ServicesMocks.RouterMock },
        { provide: GoogleAnalyticsService, useValue: ServicesMocks.GoogleAnalyticsServiceMock },
        { provide: AnalyticsService, useValue: ServicesMocks.AnalyticsService }, 
    ]

    static managerProviders= [ 
        { provide: ConfigurationProviderService, useValue: ServicesMocks.ConfigurationProviderServiceMock},
        { provide: Router, useValue: ServicesMocks.RouterMock }, 
        { provide: AnalyticsService, useValue: ServicesMocks.AnalyticsService }, 
    ]
} 