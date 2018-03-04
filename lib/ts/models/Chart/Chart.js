"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "echart", {
  enumerable: true,
  get: function get() {
    return _echarts.default;
  }
});

var _echarts = _interopRequireDefault(require("echarts/lib/echarts"));

require("echarts/lib/chart/scatter");

require("echarts/lib/component/title");

require("echarts/lib/component/toolbox");

require("echarts/lib/component/tooltip");

require("echarts/lib/component/legendScroll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }