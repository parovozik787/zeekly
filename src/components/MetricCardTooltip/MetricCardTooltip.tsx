import { Flex } from 'antd';

import { Typography } from '../Typography/Typography';

import { myClamp } from '../../shared/utils';

import './MetricCardTooltip.scss';

type MetricCardTooltipProps = {
  date?: string[];
  value?: string;
  totalSpend?: string;
};

export const MetricCardTooltip = ({
  date = ['2024-01-01', '2024-01-02'],
  value = '$5.999.00',
  totalSpend = '25%',
}: MetricCardTooltipProps) => {
  const [startDate, endDate] = date;
  return (
    <Flex vertical gap={myClamp(8)} className="metricCardTooltip">
      <Flex gap={myClamp(2)}>
        <Typography as="span" color="shark">
          {startDate}
        </Typography>
        <Typography as="span" color="shark">
          — {endDate}
        </Typography>
      </Flex>
      <Flex gap={myClamp(6)} align="center">
        <Typography weight="600" color="white">
          {value}
        </Typography>
        <Typography
          weight="600"
          color="white"
          className="metricCardTooltip__totalSpend"
        >
          {totalSpend} of total spend
        </Typography>
      </Flex>
    </Flex>
  );
};
