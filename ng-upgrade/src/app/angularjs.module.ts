import {Component, NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {UpgradeModule, downgradeComponent, getAngularLib} from '@angular/upgrade/static';
import {setUpLocationSync} from '@angular/router/upgrade';

import { TagsComponent } from './tags/tags.component';

@Component({template: ``})
export class EmptyComponent {}

const STARWARS_API = 'StarWarsApi';
const CARDS_SERVICE = 'CardsService';

export function getService($injector: any){
    return $injector.get(CARDS_SERVICE);
}

@NgModule({
  declarations: [
    EmptyComponent
  ],
  providers:[{
      'provide': CARDS_SERVICE,
      'useFactory': getService, // Don't use a function here. just reference one
      'deps': ['$injector']
  }],
  imports: [
    UpgradeModule,
    RouterModule.forChild([
      {path: '**', component: EmptyComponent}
    ])
  ]
})
export class AngularJSModule {
  // The constructor is called only once, so we bootstrap the application
  // only once, when we first navigate to the legacy part of the app.
  constructor(upgrade: UpgradeModule) {
      // Grab lib from window.
      let angular = getAngularLib();

      // you must downgrade the components before bootstrapping the application
      angular.module(STARWARS_API).directive('tags', downgradeComponent({'component': TagsComponent}));

      upgrade.bootstrap(document.body, [STARWARS_API]);
      setUpLocationSync(upgrade);
  }
}
