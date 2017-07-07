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

declare var angular: angular.IAngularStatic;

export function getCardsService($injector: any){
    return $injector.get('CardsService');
}


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
  providers: [{
      'provide': 'CardsService',
      'useFactory': getCardsService,
      'deps': ['$injector']
  }],
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
    // https://angular.io/guide/upgrade
    angular.module(STARWARS_API).directive('tags', downgradeComponent({component: TagsComponent}));

    // now bootstrap the app
    this.upgradeModule.bootstrap(document.body, [STARWARS_API], {'strictDi': true});
  }
 }
