import React from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

const XYChart = (props) => {
  let { covidData } = props;
  console.log(covidData);
  setTimeout(() => {
    let chartXY = am4core.create("xy-chart", am4charts.XYChart);
    chartXY.data = covidData;

    let dateAxis = chartXY.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.minZoomCount = 5;

    // this makes the data to be grouped
    dateAxis.groupData = true;
    dateAxis.groupCount = 500;

    let valueAxis = chartXY.yAxes.push(new am4charts.ValueAxis());

    let series = chartXY.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY}";
    series.tooltip.pointerOrientation = "vertical";
    series.tooltip.background.fillOpacity = 0.5;
    valueAxis.min = 0;
    valueAxis.max = 100000;
    valueAxis.strictMinMax = true;
    // valueAxis.renderer.minGridDistance =20;

    chartXY.cursor = new am4charts.XYCursor();
    chartXY.cursor.xAxis = dateAxis;

    chartXY.logo.disabled = true;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.disabled = true;

    function createGrid(value) {
      let range = valueAxis.axisRanges.create();
      range.value = value;
      range.label.text = "{value}";
    }
    createGrid(10000);
    createGrid(20000);
    createGrid(30000);
    createGrid(40000);
    createGrid(50000);
    createGrid(60000);
    createGrid(70000);
    createGrid(80000);
    createGrid(90000);
    createGrid(100000);
  }, 500);
  return <div id="xy-chart"></div>;
};

export default XYChart;
