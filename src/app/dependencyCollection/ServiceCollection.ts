import { ModuleWithProviders, Provider, SchemaMetadata, Type } from "@angular/core";

export class ServiceCollection {
  declarations : Array<Type<any> | any[]> ;
  imports : Array<Type<any> | ModuleWithProviders<{}> | any[]>;
  providers?: Provider[] ; 
  bootstrap?: Array<Type<any> | any[]>;
  schemas?: Array<SchemaMetadata | any[]> ; 
}