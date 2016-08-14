angular-points-path
==================
Angular JS Directive for canvas drawing with a list of points

[![GitHub release](https://img.shields.io/github/release/christianascone/angular-points-path.svg?maxAge=2592000)](https://github.com/christianascone/angular-points-path/releases/latest)
[![Bower version](https://badge.fury.io/bo/angular-points-path.svg)](https://badge.fury.io/bo/angular-points-path)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/christianascone/angular-points-path/blob/master/LICENSE)

## Installation

Install it with bower

    bower install angular-points-path --save

Add the module to your app

    angular.module('app', [
      'angular-points-path',
    ]);

Include required files

	<script src="bower_components/angular/angular.min.js"></script>
	<script src="bower_components/angular-points-path/src/angular-points-path.js"></script>

##Usage

```html
<angular-points-path points-data="data"></angular-points-path>
```

The canvas will have the same size (width and height) of his container.

For example:
```html
<div ng-controller="DemoController as demoCtrl" style="width: 500px; height: 300px;">
	<angular-points-path points-data="demoCtrl.data"></angular-points-path>
</div>
```
The canvas will be 500x300.

It is, also, possible to set a specific width or height:
```html
<angular-points-path width="500" height="300" points-data="demoCtrl.data"></angular-points-path>
```

##Data

Sample data
```js
var data = [{
	x: 30,
	y: 20,
	value: 10
}, {
	x: 10,
	y: 10,
	value: 10
}];
```

The 'value' indicates the radius of a specific point.
If not specified, the default value is 10.

## License
Released under the [MIT License](http://www.opensource.org/licenses/MIT).