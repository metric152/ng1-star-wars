import { Directive, OnInit, OnChanges, DoCheck, OnDestroy, Inject, ElementRef, SimpleChanges, Injector } from '@angular/core';
import {UpgradeComponent} from '@angular/upgrade/static';

@Directive({
  selector: 'upgrade-wrapper'
})

export class UpgradeWrapperComponent extends UpgradeComponent implements OnInit, OnChanges, DoCheck, OnDestroy {

  constructor(@Inject(ElementRef) elementRef: ElementRef, @Inject(Injector) injector: Injector) {
      super('upgrade', elementRef, injector);
      console.log( "loading wrapper" );
  }

  // For this class to work when compiled with AoT, we must implement these lifecycle hooks
  // because the AoT compiler will not realise that the super class implements them
  ngOnInit() { super.ngOnInit(); }

  ngOnChanges(changes: SimpleChanges) { super.ngOnChanges(changes); }

  ngDoCheck() { super.ngDoCheck(); }

  ngOnDestroy() { super.ngOnDestroy(); }
}
