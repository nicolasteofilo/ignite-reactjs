import { theme } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";

const options: ApexOptions = {
  chart: {
      toolbar: { show: false },
      zoom: {
          enabled: false,
      },
      foreColor: theme.colors.gray[500],
  },
  grid: { show: false },
  dataLabels: { enabled: false },
  tooltip: { enabled: false },
  xaxis: {
      type: 'datetime',
      axisBorder: { color: theme.colors.gray[600] },
      axisTicks: { color: theme.colors.gray[600] },
      categories: [
          '2021-03-19T00:00:00.000Z',
          '2021-03-20T00:00:00.000Z',
          '2021-03-21T00:00:00.000Z',
          '2021-03-22T00:00:00.000Z',
          '2021-03-23T00:00:00.000Z',
          '2021-03-24T00:00:00.000Z',
          '2021-03-25T00:00:00.000Z',
      ]
  },
  fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
          shade: 'dark',
          opacityFrom: 0.7,
          opacityTo: 0.3,
      }
  }
};

const series = [
  { name: "series1", data: [10, 41, 35, 51, 49, 62, 69] },
  { name: "series2", data: [12, 36, 58, 51, 12, 10, 58] },
]

export {
  options,
  series,
}