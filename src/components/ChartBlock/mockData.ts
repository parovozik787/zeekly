import { responsiveSize } from '../../shared/utils';
import { myClamp } from '../../shared/utils';
import { createTooltipContent } from '../ChartTooltip/ChartTooltip';
import { LegendName } from '../ChartLegend/types';
import { EChartsOption } from 'echarts';

const spendColor = '#2555ff';
const conversionsColor = '#d3ddff';
const cpaColor = '#FF713A';
const asisColor = '#5f6061';
const splitLineColor = '#e9eeff';

const cpaMockData = [
  ['2023-11-29', 220],
  ['2023-11-30', 310],
  ['2023-12-01', 400],
  ['2023-12-02', 280],
  ['2023-12-03', 360],
  ['2023-12-04', 430],
  ['2023-12-05', 390],
  ['2023-12-06', 520],
  ['2023-12-07', 480],
  ['2023-12-08', 450],
  ['2023-12-09', 500],
  ['2023-12-10', 470],
  ['2023-12-11', 510],
  ['2023-12-12', 530],
  ['2023-12-13', 550],
  ['2023-12-14', 570],
  ['2023-12-15', 590],
  ['2023-12-16', 610],
  ['2023-12-17', 630],
  ['2023-12-18', 610],
  ['2023-12-19', 580],
  ['2023-12-20', 560],
  ['2023-12-21', 540],
  ['2023-12-22', 520],
  ['2023-12-23', 500],
  ['2023-12-24', 480],
  ['2023-12-25', 460],
  ['2023-12-26', 440],
  ['2023-12-27', 420],
  ['2023-12-28', 400],
  ['2023-12-29', 380],
];

const spendMockData = [
  ['2023-11-29', 400],
  ['2023-11-30', 600],
  ['2023-12-01', 750],
  ['2023-12-02', 500],
  ['2023-12-03', 950],
  ['2023-12-04', 1100],
  ['2023-12-05', 800],
  ['2023-12-06', 700],
  ['2023-12-07', 600],
  ['2023-12-08', 750],
  ['2023-12-09', 850],
  ['2023-12-10', 1000],
  ['2023-12-11', 900],
  ['2023-12-12', 700],
  ['2023-12-13', 600],
  ['2023-12-14', 950],
  ['2023-12-15', 1100],
  ['2023-12-16', 800],
  ['2023-12-17', 700],
  ['2023-12-18', 800],
  ['2023-12-19', 900],
  ['2023-12-20', 850],
  ['2023-12-21', 700],
  ['2023-12-22', 750],
  ['2023-12-23', 800],
  ['2023-12-24', 950],
  ['2023-12-25', 1100],
  ['2023-12-26', 1000],
  ['2023-12-27', 800],
  ['2023-12-28', 700],
  ['2023-12-29', 900],
];

const conversionsMockData = [
  ['2023-11-29', 300],
  ['2023-11-30', 550],
  ['2023-12-01', 720],
  ['2023-12-02', 250],
  ['2023-12-03', 800],
  ['2023-12-04', 950],
  ['2023-12-05', 820],
  ['2023-12-06', 780],
  ['2023-12-07', 850],
  ['2023-12-08', 900],
  ['2023-12-09', 800],
  ['2023-12-10', 1000],
  ['2023-12-11', 950],
  ['2023-12-12', 850],
  ['2023-12-13', 900],
  ['2023-12-14', 920],
  ['2023-12-15', 1000],
  ['2023-12-16', 1100],
  ['2023-12-17', 1020],
  ['2023-12-18', 1050],
  ['2023-12-19', 1000],
  ['2023-12-20', 1050],
  ['2023-12-21', 980],
  ['2023-12-22', 1020],
  ['2023-12-23', 1030],
  ['2023-12-24', 1070],
  ['2023-12-25', 1100],
  ['2023-12-26', 1080],
  ['2023-12-27', 1040],
  ['2023-12-28', 1020],
  ['2023-12-29', 1000],
];

const option: EChartsOption = {
  legend: {
    show: false,
    data: [LegendName.Spend, LegendName.Conversions, LegendName.CPA],
  },
  xAxis: {
    type: 'time',
    min: new Date('2023-11-29').getTime(),
    max: new Date('2023-12-29').getTime(),
    axisLabel: {
      color: asisColor,
      fontSize: responsiveSize(14),
      margin: responsiveSize(12),
      formatter: (value) => {
        const date = new Date(value);
        return `${date.toLocaleString('en-US', { month: 'short' })} ${date.getDate()}`;
      },
    },
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    splitLine: {
      show: true,

      lineStyle: {
        color: splitLineColor,
        width: responsiveSize(1),
      },
    },
  },
  yAxis: {
    type: 'value',
    min: 0,
    max: 1200,
    interval: 400,
    axisLabel: {
      color: asisColor,
      fontSize: responsiveSize(14),
      margin: responsiveSize(12),
      formatter: (value) => {
        if (value >= 1000) return value / 1000 + 'k';
        return value.toString();
      },
    },
    axisTick: {
      show: false,
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: splitLineColor,
        width: responsiveSize(1),
      },
    },
  },
  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    top: responsiveSize(10),
    containLabel: true,
  },
  series: [
    {
      name: LegendName.Spend,
      type: 'bar',
      data: spendMockData,
      itemStyle: {
        color: spendColor,
        borderRadius: [responsiveSize(4), responsiveSize(4), 0, 0],
      },
    },
    {
      name: LegendName.Conversions,
      type: 'bar',
      data: conversionsMockData,
      itemStyle: {
        color: conversionsColor,
        borderRadius: [responsiveSize(4), responsiveSize(4), 0, 0],
      },
    },
    {
      name: LegendName.CPA,
      type: 'line',
      data: cpaMockData,
      smooth: true,
      itemStyle: {
        color: cpaColor,
      },
      lineStyle: {
        color: cpaColor,
        width: responsiveSize(2),
      },
      symbol: 'none',
    },
  ],
  tooltip: {
    trigger: 'axis',
    position: function (point, _params, _dom, _rect, size) {
      const tooltipWidth = size.contentSize[0];
      const tooltipHeight = size.contentSize[1];

      const x = point[0] - tooltipWidth / 2;
      const y = point[1] - tooltipHeight - responsiveSize(20);

      return [x, y];
    },
    extraCssText: `padding: 0; border: none; border-radius: ${myClamp(12)};`,
    formatter: createTooltipContent,
  },
};

export {
  cpaMockData,
  spendMockData,
  conversionsMockData,
  spendColor,
  conversionsColor,
  cpaColor,
  asisColor,
  splitLineColor,
  option,
};
