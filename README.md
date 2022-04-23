# Subjects

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



1. Разница между BehaviorSubject(1) и ReplaySubject(1) объяснить.

2. Посмотреть как работает оператор distinctUntilChanged. В нашем коде с кликами по кнопкам сделать два примера с ним:
   2.1 Пример 1: по клику на кнопку генерируется последовательность чисел [1, 2, 4, 4, 13, 13, 13, 4, 4, 3, 2, 5] (по клику передается новое числе из массива, доходит до 5 и после 5 complete.
   На выходе в логе должно быть: 1, 2, 4, 13 и так далее.
   2.2 Пример 2: По клику на кнопку последовательно в цепочку передаются следующие объекты по одному на каждый клик:

```
[
 {a: 1, b: 4},
 {a: 3, b: 7},
 {a: 34, b: 9},
 {a: 34, b: 9},
 {a: 56, b: 11},
 {b: 11, a: 56},
 {a: 1, b: 4}
]
```

После работы distinctUntilChanged на выходе на странице должно быть:

```
{a: 1, b: 4},
{a: 3, b: 7},
{a: 34, b: 9},
{a: 56, b: 11},
{a: 1, b: 4}
```

3\*. Есть основная "труба" button1Click$, которая показывает текущую дату. Сделать подписку (в конструкторе все делаем), которая берет оттуда значения до тех пор, пока из трубы button2Click$ не придет число 3. Реализовать с помощь takeUntil и других известных тебе операторов.

```
this.button1Click$
      .pipe() // код писать только тут внутри pipe, остальное трогать по идее не надо
      .subscribe((value) => this.log.push(value.toString()));
```

4. Наверное самая лучшая задача на сабджекты, это подготовить код или пример, который мне объяснит их разницу между Subject, BehavourSubject и ReplaySubject. То что я тебе сегодня объяснил, но со своим примером.
