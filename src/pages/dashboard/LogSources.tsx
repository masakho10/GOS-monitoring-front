import React from "react";
import Chart from "react-apexcharts";

interface LogSourcesProps {
  title?: string;
  data: any;
  type?:
    | "line"
    | "area"
    | "bar"
    | "histogram"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "treemap"
    | "boxPlot"
    | "candlestick"
    | "radar"
    | "polarArea"
    | "rangeBar";
  options?: any;
  labels?: string[];
}

const defaultOptions = {
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      customScale: 0.8,
      donut: {
        size: "75%",
      },
      offsetY: 0,
    },
    stroke: {
      colors: undefined,
    },
  },
  colors: ["#FE8D06", "#000000"],
  legend: {
    position: "bottom",
    offsetY: 0,
  },
};

const LogSources = ({
  data,
  type,
  labels,
  options,
}: LogSourcesProps) => {
  return (
    <>
      <Chart
        series={data}
        type={type as any}
        height={300}
        options={Object.assign({}, defaultOptions, options, { labels })}
      ></Chart>
    </>
  );
};

export default LogSources;
