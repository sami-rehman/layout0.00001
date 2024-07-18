import React, { useEffect, useRef } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import * as am4charts from "@amcharts/amcharts4/charts";

const TreemapChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Apply themes
        am4core.useTheme(am4themes_animated);
        am4core.useTheme(am4themes_material);

        // Create chart instance
        const chart = am4core.create(chartRef.current, am4charts.TreeMap);
        chart.data = [{
            "name": "First",
            "children": [{
                "name": "A1",
                "value": 100,
                "children": [
                    { "name": "AA1", "value": 50 },
                    { "name": "AA2", "value": 50 }
                ]
            }, {
                "name": "A2",
                "value": 60
            }]
        }, {
            "name": "Second",
            "children": [{
                "name": "B1",
                "value": 135
            }, {
                "name": "B2",
                "value": 98
            }]
        }, {
            "name": "Third",
            "children": [{
                "name": "C1",
                "value": 335
            }, {
                "name": "C2",
                "value": 148
            }, {
                "name": "C3",
                "value": 126
            }, {
                "name": "C4",
                "value": 26
            }]
        }, {
            "name": "Fourth",
            "children": [{
                "name": "D1",
                "value": 415
            }, {
                "name": "D2",
                "value": 148
            }, {
                "name": "D3",
                "value": 89
            }, {
                "name": "D4",
                "value": 64
            }, {
                "name": "D5",
                "value": 16
            }]
        }, {
            "name": "Fifth",
            "children": [{
                "name": "E1",
                "value": 335
            }, {
                "name": "E2",
                "value": 148
            }, {
                "name": "E3",
                "value": 126
            }, {
                "name": "E4",
                "value": 26
            }]
        }];

        chart.dataFields.value = "value";
        chart.dataFields.name = "name";
        chart.dataFields.children = "children";

        chart.homeText = "Home";

        // Configure levels
        const level0 = chart.seriesTemplates.create("0");
        const level1 = chart.seriesTemplates.create("1");
        const level2 = chart.seriesTemplates.create("2");

        level0.columns.template.tooltipText = "{name}: {value}";
        level1.columns.template.tooltipText = "{name}: {value}";
        level2.columns.template.tooltipText = "{name}: {value}";

        level0.columns.template.fillOpacity = 0.8;
        level1.columns.template.fillOpacity = 0.7;
        level2.columns.template.fillOpacity = 0.6;

        chart.maxLevels = 3; // Set maximum levels

        chart.seriesTemplates.template.columns.template.stroke = am4core.color("#fff");
        chart.seriesTemplates.template.columns.template.strokeWidth = 2;

        chart.initialDepth = 3; // Set initial depth

        // Dispose chart on component unmount
        return () => {
            chart.dispose();
        };
    }, []);

    return <div id="chartdiv" ref={chartRef} style={{ width: "100%", height: "500px" }}></div>;
};

export default TreemapChart;
