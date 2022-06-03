import { Injectable } from '@angular/core';
import { AnalyticsService, ConfigurationProviderService } from '@siigo/siigo-library-core-angular';
import { AnalyticsNameEnum } from '@siigo/siigo-library-enums';

@Injectable({
  providedIn: 'root'
})

export class GoogleAnalyticsService {

  private enumAnalytics = AnalyticsNameEnum.general_colombia_test;

  constructor(
    private configurationProviderService: ConfigurationProviderService,
    private analyticsService: AnalyticsService
  ) {
    this.initializerApp();
  } 

  initializerApp() {
    const oUser = this.configurationProviderService.getUserInformation();
    const helpItems = oUser.HelpItems ? oUser.HelpItems : oUser.helpItems;
    if (helpItems == undefined) return; 

    let oQAEnviroment = undefined;
    for (let index = 0; index < helpItems.length; index++) {
      if (helpItems[index].Name === 'QAEnviroment'){
        oQAEnviroment = helpItems[index];
        break;
      }
    }
    if(oQAEnviroment == undefined) return;

    this.enumAnalytics = AnalyticsNameEnum.general_colombia_test;
  }
  
  /**
   * logEvent: Método que permite registrar en Firebase un Evento producido en la aplicación
   * @param {*} eventName
   * @param {*} params
   */
  public logEvent(eventName, params = {}) {
    this.analyticsService.eventEmitter(eventName, params, this.enumAnalytics);
  }
}