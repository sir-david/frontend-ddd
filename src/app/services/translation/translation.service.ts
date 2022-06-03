import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TranslationService implements TranslateLoader  { 
  private httpClient: HttpClient;

  constructor( backend: HttpBackend) { 
    this.httpClient = new HttpClient(backend);
   }

  getTranslation(lang: string): Observable<any> {
      const language = lang? lang: environment.defaultLanguage;
      const apiAddress = environment.pathAssets + `i18n/${language}.json`;
      return this.httpClient.get(apiAddress)
      .pipe(
        catchError(_ => 
          this.httpClient.get(`./assets/i18n/${language}.json`)
          )
      );
  }
}
