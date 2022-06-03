import { enableProdMode, NgZone } from '@angular/core';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router, NavigationStart } from '@angular/router';
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';

import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';


import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';

let dtn = '';

if (environment.production) {
  dtn = `?v=#{InstallVersion}#`;
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
  },
  template: '<arquetipoEjemplo-root />',
  Router,
  NavigationStart,
  NgZone,
  AnimationEngine,
});

export const bootstrap = [
  () => Promise.all([
    //loadScript(`${environment.siigoTextfieldWebUrl}`)
  ]),
   lifecycles.bootstrap,
  ]

function loadScript(url: string) {
    return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url + dtn;
    function onLoad() {
      resolve(true);
      cleanup();
    }

    function onError(event: Event) {
      reject(event);
      cleanup();
    }

    function cleanup() {
     script.removeEventListener('load', onLoad);
     script.removeEventListener('error', onError);
  }

    script.addEventListener('load', onLoad);
    script.addEventListener('error', onError);
    document.head.appendChild(script);
  });
}
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
