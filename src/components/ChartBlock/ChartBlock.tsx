import { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { EChartOption } from 'echarts';
import { Flex } from 'antd';

import Legend from '../ChartLegend/ChartLegend';
import { Typography } from '../Typography/Typography';

import { myClamp } from '../../shared/utils';
import { option } from './mockData';
import { initialLegendSelection, legendData } from '../ChartLegend/mockData';

import '../ChartTooltip/ChartTooltip.scss';
import './ChartBlock.scss';

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

  useEffect(() => {
    const chartInstance = chartRef.current?.getEchartsInstance();
    if (chartInstance) {
      chartInstance.setOption({
        ...option,
        legend: { ...option.legend, selected: legendSelection },
      } as EChartOption);
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
