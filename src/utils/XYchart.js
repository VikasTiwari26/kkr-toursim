import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

const XYChart = (props) => {
    let {covidData} = props
    console.log(covidData)
    setTimeout(()=>{
        let chartXY = am4core.create("xy-chart",am4charts.XYChart)
        // let data = [];
        // let visits = 10;
        // for (var i = 1; i < 50000; i++) {
        //     visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        //     data.push({ date: new Date(2018, 0, i), value: visits });
        // }

        chartXY.data =covidData;
        // console.log(data)

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

chartXY.cursor = new am4charts.XYCursor();
chartXY.cursor.xAxis = dateAxis;

chartXY.logo.disabled = true;

    },500)
    return ( 
        <div id="xy-chart"></div>
     );
}
 
export default XYChart;