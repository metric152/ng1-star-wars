import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';

import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: []
  // bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private upgrade:UpgradeModule){ }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['StarWarsApi']);
  }
 }
