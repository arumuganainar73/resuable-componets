import {
  Directive,
  Input,
  AfterViewInit,
  DoCheck,
  ChangeDetectorRef,
} from '@angular/core';

import { Observable } from 'rxjs';

@Directive({
  selector: '[ng6Checkbox]'
})
export class Ng6CheckboxDirective implements AfterViewInit, DoCheck {
  public topLevel: bool = false;
  public _items: Array<any>;
  private _subscription: Subscription;
  @Input() items: Observable<any[]>;
  count;
  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  private setState() {
    if (!this._items) {
      return;
    }
    const count = 0;
    for (const i = 0; i < this._items.length; i++) {
      this.count += this._items[i].isSelected ? 1 : 0;
    }
    this.topLevel = count === 0 ? false : true;
    if (count > 0 && count < i) {
      console.log('Setting indeterminate.');
      this.checkbox.nativeElement.indeterminate = true;
    } else {
      console.log('Removing indeterminate.');
      this.checkbox.nativeElement.indeterminate = false;
    }
  }

  ngDoCheck() {
    this.setState();
  }

  public topLevelChange() {
    console.log('Clicked. ' + this.topLevel);
    for (const i: int = 0; i < this._items.length; i++) {
      this._items[i].isSelected = this.topLevel;
    }
  }

  ngAfterViewInit() {
    this._subscription = this.items.subscribe(res => {
      console.log('Subscription triggered.');
      this._items = res;
      this.setState();
      this._changeDetectorRef.detectChanges();
    });
  }
}
