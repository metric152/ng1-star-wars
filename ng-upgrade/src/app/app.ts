import * as angular from 'angular';
import { WindowRef } from './window-wrapper';

export class Ng1Bootstrap {
  constructor(private winRef: WindowRef){
    winRef.nativeWindow.StarWarsApi = angular.module('StarWarsApi', []);

    winRef.nativeWindow.StarWarsApi.run(angular.noop);
    winRef.nativeWindow.StarWarsApi.$inject = [];
    console.log( "app ran" );
  }

  public
}
