import { Flex } from 'antd';
import { useQuery } from '@tanstack/react-query';

import { myClamp } from '../shared/utils';
import { QuickActionsBlock } from '../components/QuickActionsBlock/QuickActionsBlock';
import { MetricsBlock } from '../components/MetricsBlock/MetricsBlock';
import { ContentTitleBlock } from '../components/ContentTitleBlock/ContentTitleBlock';
import Table from '../components/Table/Table';
import Chart from '../components/ChartBlock/ChartBlock';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import { Typography } from '../components/Typography/Typography';
import { fetchMetricsData } from '../api/fetchMetricksData';
import { Metric } from '../components/MetricsBlock/types';

export const Overview = () => {
  const { data, isLoading } = useQuery<Metric[]>({
    queryKey: ['metricsFetchingKey'],
    queryFn: fetchMetricsData,
  });

  return (
    <ContentContainer>
      <Flex vertical gap={myClamp(10)}>
        <Flex vertical gap={myClamp(24)}>
          <ContentTitleBlock />
          <MetricsBlock data={data} isLoading={isLoading} />
        </Flex>
        <Chart />
      </Flex>
      <Flex vertical gap={myClamp(24)}>
        <QuickActionsBlock />
      </Flex>
      <Flex vertical gap={myClamp(16)}>
        <Typography size="18" weight="600">
          Top 10 creatives
        </Typography>
        <Table />
      </Flex>
    </ContentContainer>
  );
};
