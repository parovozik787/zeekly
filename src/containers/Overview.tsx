import { Flex } from 'antd';
import { myClamp } from '../shared/utils';
import { QuickActionsBlock } from '../components/QuickActionsBlock/QuickActionsBlock';
import { MetricsBlock } from '../components/MetricsBlock/MetricsBlock';
import { ContentTitleBlock } from '../components/ContentTitleBlock/ContentTitleBlock';
import Table from '../components/Table/Table';
import Chart from '../components/ChartBlock/ChartBlock';
import { ContentContainer } from '../components/ContentContainer/ContentContainer';
import { Typography } from '../components/Typography/Typography';
export const Overview = () => {
  return (
    <ContentContainer>
      <Flex vertical gap={myClamp(10)}>
        <Flex vertical gap={myClamp(24)}>
          <ContentTitleBlock />
          <MetricsBlock />
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
