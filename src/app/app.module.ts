import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpBackend } from '@angular/common/http';

//Routing
import { AppRoutingModule } from './app-routing.module';

//Librarys
import { SiigoLibraryCoreAngularModule } from '@siigo/siigo-library-core-angular';

//Services
import { ServiceModule } from './services/service.module';
import { TranslationService } from './services/service.index';

//Components
import { TestHeaderComponent, TestBodyComponent, TestFooterComponent } from './components/component.index';

//Pages  
import { TestPage, EmptyRoutePage } from './pages/page.index';

//Controls
import { SiigoButtonAtomLibraryModule } from "@siigo/siigo-button-atom-angular" 
import { ServiceCollectionExtension, ServiceCollection } from "./dependencyCollection" 

let injectableObjects:ServiceCollection = {
  declarations: [
    AppComponent,
    TestHeaderComponent, 
    TestFooterComponent,
    EmptyRoutePage
  ],
  imports: [
    SiigoLibraryCoreAngularModule.forRoot(environment),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ServiceModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: TranslationService,
        deps: [HttpBackend]
      },
      isolate: false
    }),
    SiigoButtonAtomLibraryModule
  ],
  providers: []
}

injectableObjects = ServiceCollectionExtension.AddServicesCollections(injectableObjects);

@NgModule({
  declarations: injectableObjects.declarations ,
  imports:  injectableObjects.imports,
  providers: injectableObjects.providers,
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
