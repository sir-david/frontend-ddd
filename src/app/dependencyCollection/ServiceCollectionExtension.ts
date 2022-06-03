import { ModuleWithProviders, Provider, Type } from "@angular/core";

import { TestBodyComponentFactory } from "../components/components.factory";
import { TestPageFactory } from "../pages/test-page.factory";
import { ServiceCollection } from "./ServiceCollection";

export abstract class ServiceCollectionExtension { 
    private static testBodyFactory:TestBodyComponentFactory;
    private static testPageFactory:TestPageFactory;
    private static _injectableObjects: ServiceCollection;
    
    public static GetLocalizatedDeclarations = (): Array<Type<any> | any[]>  => ServiceCollectionExtension._injectableObjects.declarations;
    public static GetLocalizatedImports = (): Array<Type<any> | ModuleWithProviders<{}> | any[]> =>ServiceCollectionExtension._injectableObjects.imports; 
    public static GetLocalizatedProviders = (): Provider[] => ServiceCollectionExtension._injectableObjects.providers; 

    public static AddServicesCollections(services:ServiceCollection ):ServiceCollection {
      ServiceCollectionExtension.testBodyFactory  = new TestBodyComponentFactory();
      ServiceCollectionExtension._injectableObjects = services;
      
      //Here add customs Declarations 
      ServiceCollectionExtension._injectableObjects.declarations.push(ServiceCollectionExtension.testBodyFactory.GetLocalizedComponent() as any);
      ServiceCollectionExtension._injectableObjects.declarations.push(ServiceCollectionExtension.testPageFactory.GetLocalizedComponent() as any);
      
      //Here add customsImports 
      ServiceCollectionExtension._injectableObjects.imports = services.imports;
      
      //Here add Providers 
      ServiceCollectionExtension._injectableObjects.providers = services.providers; 

      return ServiceCollectionExtension._injectableObjects;
    }
  }