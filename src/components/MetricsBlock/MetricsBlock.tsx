import { Flex } from 'antd';

import MetricCard from '../MetricCard/MetricCard';

import { metrics } from './mockData';

import './MetricsBlock.scss';

export const MetricsBlock = () => {
  return (
    <Flex wrap className="metrics-block">
      {metrics.map((metric) => (
        <MetricCard key={metric.label} {...metric} />
      ))}
    </Flex>
  );
};
