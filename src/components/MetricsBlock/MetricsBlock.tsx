import { Flex, Skeleton } from 'antd';

import MetricCard from '../MetricCard/MetricCard';

import { Metric } from './types';
import './MetricsBlock.scss';
import { myClamp } from '../../shared/utils';

export const MetricsBlock = ({
  data,
  isLoading,
}: {
  data?: Metric[];
  isLoading: boolean;
}) => {
  return isLoading ? (
    <Skeleton.Node active style={{ width: '100%', height: myClamp(142) }} />
  ) : (
    <Flex wrap className="metrics-block">
      {data?.map((metric) => <MetricCard key={metric.label} {...metric} />)}
    </Flex>
  );
};
