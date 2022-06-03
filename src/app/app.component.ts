import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SecurityService } from '@siigo/siigo-library-core-angular';
import * as $ from 'jquery';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'arquetipoEjemplo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'microfrontend-arquetipoEjemplo';

  public view = true;
  public mainClasses = ['marginMenuLeft'];
  private stateClose = '"close"';
  public containterArquetipoEjemploClass = ['arquetipoEjemplo-container'];
  private prefixUrl = `arquetipoEjemplo/`;
  constructor(private router: Router, private securityService: SecurityService, private cdref: ChangeDetectorRef) {
    // Se identifica cuando esta dentro del mismo componente, pero la url a cambio, en este caso cuando se esta en
    // Los Guards no dan el resultado esperado por lo cual se valida manualmente si un usuario tiene permisos para ingresar al comprobante.
    router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (this.view) {
        if (event.url.includes(this.prefixUrl)) {
          const split = event.url.split('/');
          if (split[2]) {
            this.securityService.getHasPermissionTab(split[2]).then( response => {
              this.view = response;
              this.cdref.detectChanges();
              if (!response) {
                this.router.navigateByUrl('/page-access-denied');
              }
            });
          }
        }
      }
    });
  }

  ngAfterViewInit() {
    this.stylesDependSideMenu();
  }

  // TODO: Revisar con un experto en CSS como retirar esta lógica
  public stylesDependSideMenu() {
    const main = $('div#main');
    const sideNav = $('#mySidenav');
    if (localStorage.getItem('SideBarState') === this.stateClose) {
      if (sideNav.hasClass('dynamicSidenav')) {
        sideNav.removeClass('dynamicSidenav');
        main.removeClass('dynamicMain');
      }
      if (!sideNav.hasClass('dynamicCompressSidenav')) {
        sideNav.addClass('dynamicCompressSidenav');
      }
      main.addClass('dynamicCompressMain');
    } else {
      if (sideNav.hasClass('dynamicCompressSidenav')) {
        sideNav.removeClass('dynamicCompressSidenav');
        main.removeClass('dynamicCompressMain');
      }
      if (!sideNav.hasClass('dynamicSidenav')) {
        sideNav.addClass('dynamicSidenav');
      }
      main.addClass('dynamicMain');
    }
    const divTabs = $('#mf_tabs');
    if (divTabs.length > 0) {
      this.containterArquetipoEjemploClass = [''];
    } else {
      this.containterArquetipoEjemploClass = ['arquetipoEjemplo-container'];
    }
    this.cdref.detectChanges();
  }
}

