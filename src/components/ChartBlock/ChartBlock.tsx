import ReactECharts from 'echarts-for-react';
import { myClamp, responsiveSize } from '../../shared/utils';
import Legend from '../ChartLegend/ChartLegend';
import { Flex } from 'antd';
import { Typography } from '../Typography/Typography';
import { useEffect, useRef, useState } from 'react';
import { spendMockData, conversationsMockData, cpaMockData } from './mockData';
import { EChartsOption, EChartOption } from 'echarts';
import createTooltipContent from '../ChartTooltip/ChartTooltip';
import '../ChartTooltip/ChartTooltip.scss';
import './ChartBlock.scss';

export const enum LegendType {
  Bar = 'bar',
  Line = 'line',
}

const spendColor = '#2555ff';
const conversationsColor = '#d3ddff';
const cpaColor = '#FF713A';
const asisColor = '#5f6061';
const splitLineColor = '#e9eeff';

export type LegendData = {
  name: string;
  type: LegendType;
  color: string;
};

const enum LegendName {
  Spend = 'Spend',
  Conversations = 'Conversations',
  CPA = 'CPA',
}

const legendData: LegendData[] = [
  { name: LegendName.Spend, type: LegendType.Bar, color: spendColor },
  {
    name: LegendName.Conversations,
    type: LegendType.Bar,
    color: conversationsColor,
  },
  { name: LegendName.CPA, type: LegendType.Line, color: cpaColor },
];

const initialLegendSelection = legendData.reduce(
  (acc, { name }) => {
    acc[name] = true;
    return acc;
  },
  {} as Record<LegendData['name'], boolean>
);

const Chart = () => {
  const chartRef = useRef<ReactECharts>(null);

  const [legendSelection, setLegendSelection] = useState(
    initialLegendSelection
  );

  const handleLegendChange = (name: string, isSelected: boolean) => {
    setLegendSelection((prevSelection) => ({
      ...prevSelection,
      [name]: isSelected,
    }));
  };

  const option: EChartsOption = {
    legend: {
      show: false,
      data: [LegendName.Spend, LegendName.Conversations, LegendName.CPA],
      selected: legendSelection,
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
        name: LegendName.Conversations,
        type: 'bar',
        data: conversationsMockData,
        itemStyle: {
          color: conversationsColor,
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

  useEffect(() => {
    const chartInstance = chartRef.current?.getEchartsInstance();
    if (chartInstance) {
      chartInstance.setOption(option as EChartOption);
    }
  }, [legendSelection]);

  return (
    <Flex vertical gap={myClamp(24)} className="chart-block">
      <Flex justify="space-between" align="center">
        <Typography weight="600">Ad spend</Typography>
        <Legend
          data={legendData}
          onLegendChange={handleLegendChange}
          legendSelection={legendSelection}
        />
      </Flex>
      <ReactECharts
        ref={chartRef}
        option={option}
        style={{
          height: myClamp(194),
        }}
      />
    </Flex>
  );
};

export default Chart;
