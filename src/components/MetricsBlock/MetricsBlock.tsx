import { Flex } from 'antd';

import MetricCard from '../MetricCard/MetricCard';

import './MetricsBlock.scss';

export const MetricsBlock = () => {
  return (
    <Flex wrap className="metrics-block">
      <MetricCard />
      <MetricCard />
      <MetricCard />
      <MetricCard />
    </Flex>
  );
};
