import { Component } from '@angular/core';
import {distinctUntilChanged, map, Subject, take, takeUntil} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public button1Click$: Subject<string> = new Subject<string>();
  public button2Click$: Subject<number> = new Subject<number>();
  public button3Click$: Subject<number | object> = new Subject<number | object>();
  public destroy$:Subject<number> = new Subject<number>()
  public log: string[] = [];
  private _btn2Counter = 0;

  private _btn3Array = [1, 2, 4, 4, 13, 13, 13, 4, 4, 3, 2, 5];
  private _btn3Array2 = [
    {a: 1, b: 4},
    {a: 3, b: 7},
    {a: 34, b: 9},
    {a: 34, b: 9},
    {a: 56, b: 11},
    {b: 11, a: 56},
    {a: 1, b: 4}
  ]
  private _btn3CurrentIndex = 0;

  constructor() {
    this.button1Click$
      .pipe(
        takeUntil(this.button2Click$)
      )
      .subscribe((value) => this.log.push(value.toString()));

    this.button2Click$
      .pipe(
        take(3),
        map((value) => value * 10)
      )
      .subscribe((value) => this.log.push(value.toString()));

    this.button3Click$
      .pipe(
        map((value) => JSON.stringify(value)),
        distinctUntilChanged()
      )
      .subscribe((value) => this.log.push(value.toString()));
  }

  button1Click() {
    this.button1Click$.next(new Date().toISOString());
  }

  button2Click() {
    this.button2Click$.next(this._btn2Counter);
    this._btn2Counter += 1;
  }

  button3Click() {
    this.button3Click$.next(this._btn3Array2[this._btn3CurrentIndex])
    this._btn3CurrentIndex++;
    if (this._btn3Array.length < this._btn3CurrentIndex + 1) {
      this.button3Click$.complete();
    }


    // this.button3Click$.next(this._btn3Array[this._btn3CurrentIndex]);
    // this._btn3CurrentIndex++;
    // if (this._btn3Array.length < this._btn3CurrentIndex + 1) {
    //   this.button3Click$.complete();
    // }
  }
}
