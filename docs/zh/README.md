# vue-real-wave 1.0.2

[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Vue.js波浪效果插件

![demo](https://raw.githubusercontent.com/superhos/vue-real-wave/master/docs/demo.gif)

## Installation

1) 通过NPM安装

```bash
npm install vue-real-wave
```
2) 项目中引用插件

```javascript
import VueRealWave from 'vue-real-wave'
```
or

```javascript
const vueBaberrage = request('vue-baberrage');
```

## Usage

1) 模板

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

2) 搞定


## 插件参数

#### waveGap
	- Default: `150`
	- Acceptable-Values: Number
	- Function: 波浪间的距离。

#### waveHeight
	- Default: `40`
	- Acceptable-Values: Number
	- Function: 波浪的高度。

#### waveLayerCount
	- Default: `4`
	- Acceptable-Values: Number
	- Function: 波浪的层数。 ** 注意 ** 波浪的层数必须跟颜色数组长度相等。

#### waveColor
	- Default: `['#40ccd4','#71d8df','rgba(256,256,256,.5)','rgba(256,256,256,1)']`
	- Acceptable-Values: Array
	- Function: 波浪颜色数组。 ** 注意 ** 波浪的层数必须跟颜色数组长度相等。

#### wavePosition
	- Default: `bottom`
	- Acceptable-Values: String
	- Function: 'top' 或者 'bottom'. 波浪相对于内容的位置。

#### space
	- Default: `50`
	- Acceptable-Values: Number
	- Function: 距离内容最近位置的距离.


## Events

None.

## Log

#### Version 0.0.1
- Realized the basic functionality.

#### Version 1.0.0
- Performance improvement.

#### Version 1.0.2
- Update README.md.
