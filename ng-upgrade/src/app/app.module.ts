import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';

import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';
import * as angular from 'angular';

const STARWARS_API = 'StarWarsApi';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  entryComponents: [
      PersonComponent
  ]
  // bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private upgrade:UpgradeModule){ }

  ngDoBootstrap() {
    // you must downgrade the components before bootstrapping the application
    // https://angular.io/guide/upgrade
    angular.module(STARWARS_API).directive('person', downgradeComponent({component: PersonComponent}) as angular.IDirectiveFactory);
    // now bootstrap the app
    this.upgrade.bootstrap(document.body, [STARWARS_API]);
    console.log( "downgrade complete" );
  }
 }
