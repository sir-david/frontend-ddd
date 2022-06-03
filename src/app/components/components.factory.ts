import { IComponentFactory, IComponent } from "src/app/dependencyCollection";
import { environment } from "src/environments/environment";
import { TestBodyComponent, TestBodyComponentEC } from "./component.index"; 
 
export class TestBodyComponentFactory implements IComponentFactory {  
  GetLocalizedComponent(): IComponent {
    let countryCode = environment.countryCode; 
    switch(countryCode){
      case "EC":
        return TestBodyComponentEC;
      default:
        return TestBodyComponent;
    }
  } 
}