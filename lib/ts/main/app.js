"use strict";

var _Chart = require("../models/Chart/Chart");

var _ChartTheme = require("../models/Chart/ChartTheme");

var _ChartOption = require("../models/Chart/ChartOption");

var _ReactionFactory = require("../models/Reactions/ReactionFactory");

var _ChartController = require("../models/Chart/ChartController");

var option = (0, _ChartOption.getChartOptions)("reversibleFirstOrderReaction");
var factoryReaction;
factoryReaction = new _ReactionFactory.ReactionFactory();
var reaction;
reaction = factoryReaction.getReaction("reversibleFirstOrderReaction", 100000);
reaction.startReaction();
var num_a = reaction.getConcetrations()[0];
var num_b = reaction.getConcetrations()[1];

var chartOfConcentration = _Chart.echart.init(document.getElementById('main'), _ChartTheme.ChartTheme);

chartOfConcentration.setOption(option);

window.onresize = function () {
  if (chartOfConcentration != null && chartOfConcentration != undefined) {
    chartOfConcentration.resize();
  }
};

var chartController = new _ChartController.ChartController(chartOfConcentration, num_a, num_b);
chartController.animateChart();