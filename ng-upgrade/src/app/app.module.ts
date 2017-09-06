import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { PersonComponent } from './person/person.component';

import { TagsComponent } from './tags/tags.component';

import * as angular from 'angular';
import { UpgradeAdapter } from '@angular/upgrade';

import { UpgradeWrapperComponent } from './upgrade-wrapper/upgrade-wrapper.component';
// import { UpgradeWrapper } from './upgradewrapper';

const STARWARS_API = 'StarWarsApi';
const CARDS_SERVICE = 'CardsService';

// Upgrade adapter must point to the app module
// forwardRef stops circular references
export const upgradeAdapter = new UpgradeAdapter(forwardRef(() => AppModule));

// This works without AOT
export function loadNg1Component1(adapter, component){
    if(!adapter){
        return null;
    } else {
        return adapter.upgradeNg1Component(component);
    }
}

// export const upgradedComponent = loadNg1Component1(upgradeAdapter, 'upgrade');

@NgModule({
  // schemas: [NO_ERRORS_SCHEMA],
  declarations: [
    AppComponent,
    TagsComponent,
    // upgradedComponent
    UpgradeWrapperComponent
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
  constructor(){
      console.log( "this worked" );
  }

  public static loadNg1Component(component){
      if(!upgradeAdapter){
          return null;
      } else {
          return upgradeAdapter.upgradeNg1Component(component);
      }
  }

  ngDoBootstrap() {
    // Upgrade a component
    // This has to be loaded in declarations to work properly
    // upgradeAdapter.upgradeNg1Component('upgrade');

    // you must downgrade the components before bootstrapping the application
    angular.module(STARWARS_API).directive('tags', upgradeAdapter.downgradeNg2Component(TagsComponent));

    // Providers are automatically added to the providers array if you use the upgradeAdapter
    upgradeAdapter.upgradeNg1Provider(CARDS_SERVICE);

    // now bootstrap the app
    upgradeAdapter.bootstrap(document.body, [STARWARS_API], {'strictDi': true});
  }
 }
