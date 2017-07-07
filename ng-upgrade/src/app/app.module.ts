import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { PersonComponent } from './person/person.component';

import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import { TagsComponent } from './tags/tags.component';

import * as angular from 'angular';
import { upgradeAdapter } from './upgrade-adapter';

const STARWARS_API = 'StarWarsApi';
const CARDS_SERVICE = 'CardsService';

///////////////////////////////////////////////////////////////////////////////
// This is for setting up the ng1 service to be injected into a ng component //
///////////////////////////////////////////////////////////////////////////////

// https://angular.io/guide/upgrade#why-declare-angular-as-angulariangularstatic
declare var angular: angular.IAngularStatic;

// Fix a typescript error for the card service
export function getCardsService($injector: any){
    return $injector.get(CARDS_SERVICE);
}

// https://angular.io/api/upgrade/static/UpgradeModule#upgrading-an-angular-1-service
export const cardsService = {
    'provide': CARDS_SERVICE,
    'useFactory': getCardsService,
    'deps': ['$injector']
};

///////////////////////////////////////////////////////////////////////////////
// This is for setting up the ng1 service to be injected into a ng component //
///////////////////////////////////////////////////////////////////////////////


@NgModule({
  declarations: [
    AppComponent,
    TagsComponent

    // PersonComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    HttpModule
  ],
  providers: [cardsService],
  entryComponents: [
      TagsComponent
    //   PersonComponent
  ]
  // bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private upgradeModule:UpgradeModule){ }

  ngDoBootstrap() {
    // you must downgrade the components before bootstrapping the application
    // https://angular.io/guide/upgrade#using-angular-components-from-angularjs-code
    angular.module(STARWARS_API).directive('tags', downgradeComponent({component: TagsComponent}));

    // now bootstrap the app
    // https://angular.io/guide/upgrade#bootstrapping-hybrid-applications
    this.upgradeModule.bootstrap(document.body, [STARWARS_API], {'strictDi': true});
  }
 }
