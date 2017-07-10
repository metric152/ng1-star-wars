import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { PersonComponent } from './person/person.component';

import { TagsComponent } from './tags/tags.component';

import * as angular from 'angular';
import { UpgradeAdapter } from '@angular/upgrade';

const STARWARS_API = 'StarWarsApi';
const CARDS_SERVICE = 'CardsService';

// Upgrade adapter must point to the app module
// forwardRef stops circular references
export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

@NgModule({
  declarations: [
    AppComponent,
    TagsComponent

    // PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  entryComponents: [
      TagsComponent
    //   PersonComponent
  ]
  // bootstrap: [AppComponent]
})

export class AppModule {
  constructor(){ }

  ngDoBootstrap() {
    // you must downgrade the components before bootstrapping the application
    angular.module(STARWARS_API).directive('tags', upgradeAdapter.downgradeNg2Component(TagsComponent));

    // Providers are automatically added to the providers array if you use the upgradeAdapter
    upgradeAdapter.upgradeNg1Provider(CARDS_SERVICE);

    // now bootstrap the app
    upgradeAdapter.bootstrap(document.body, [STARWARS_API], {'strictDi': true});
  }
 }
