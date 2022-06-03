import { IComponentFactory, IComponent } from "src/app/dependencyCollection";
import { environment } from "src/environments/environment";
import { TestPage, TestPageEC } from "./page.index"; 
 
export class TestPageFactory implements IComponentFactory {  
  GetLocalizedComponent(): IComponent {
    let countryCode = environment.countryCode; 
    switch(countryCode){
      case "EC":
        return TestPageEC;
      default:
        return TestPage;
    }
  } 
}