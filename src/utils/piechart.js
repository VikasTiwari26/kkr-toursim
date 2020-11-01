import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);
const PieChart = (props) => {
    let {active,deaths,recovered} = props
    // console.log(active,deaths,recovered)
    setTimeout(()=>{
    let chartP =  am4core.create("piechart", am4charts.PieChart);
    let series =  chartP.series.push(new am4charts.PieSeries());

    chartP.data = [
        {
            label:"Active",
            value:active,
            color:am4core.color("#2E86C1"),
            radValue:180
        },
        {
            label:"Recovered",
            value:recovered,
            color:am4core.color("#32CD32"),
            radValue:200
        },
        {
            label:"Deaths",
            value:deaths,
            color:am4core.color("#B22222"),
            radValue:160
        },
    ]

    series.dataFields.value = "value";
    series.dataFields.category = "label";
    series.dataFields.radiusValue = "radValue";
    series.slices.template.propertyFields.fill = "color";
    series.colors.step = 3;
    series.hiddenState.properties.endAngle = -90;
    chartP.logo.disabled = true;
    series.slices.template.cornerRadius = 0;
    // chartP.radius = am4core.percent(60);

    },500)

    return ( 
         <div id="piechart"></div>
     );
}
 
export default PieChart;