# vue-real-wave 1.0.2

[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Wave effect plugin for Vue.js

![demo](https://raw.githubusercontent.com/superhos/vue-real-wave/master/docs/demo.gif)

[中文文档](/docs/zh/README.md)

## Installation

1) Install package via NPM

```bash
npm install vue-real-wave
```
2) Install plugin within project

```javascript
import VueRealWave from 'vue-real-wave'
```
or

```javascript
const vueBaberrage = request('vue-baberrage');
```

## Usage

1) Template

```html
<div id="app">
  <VueRealWave wavePosition="bottom" :waveLayerCount="4" :space="80" :waveGap="100">
    <div>
      <h1>I am the content.</h1>
    </div>
  </VueRealWave>
  ...
</div>
```

2) Already done

Just One step.

## Plugin Options

#### waveGap
	- Default: `150`
	- Acceptable-Values: Number
	- Function: The gap distance between two wave.

#### waveHeight
	- Default: `40`
	- Acceptable-Values: Number
	- Function: The height of the wave.

#### waveLayerCount
	- Default: `4`
	- Acceptable-Values: Number
	- Function: The layers number of the wave. ** Note that ** the size of the color's list must be equal with waveLayerCount.

#### waveColor
	- Default: `['#40ccd4','#71d8df','rgba(256,256,256,.5)','rgba(256,256,256,1)']`
	- Acceptable-Values: Array
	- Function: The color's list of the wave. ** Note that ** the size of the color arrage must be equal with waveLayerCount.

#### waveBackgroundColor
	- Default: `#0aaacb`
	- Acceptable-Values: String
	- Function: The Background color.


#### wavePosition
	- Default: `bottom`
	- Acceptable-Values: String
	- Function: 'top' or 'bottom'. Determine the position of the wave of the content.

#### space
	- Default: `50`
	- Acceptable-Values: Number
	- Function: The padding between with the nearest element.


## Events

None.

## Log

#### Version 0.0.1
- Realized the basic functionality.

#### Version 1.0.0
- Performance improvement.

#### Version 1.0.2
- Update README.md.
