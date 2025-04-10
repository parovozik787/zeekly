import { Flex, Tooltip } from 'antd';

import { Typography } from '../Typography/Typography';
import { MetricCardTooltip } from '../MetricCardTooltip/MetricCardTooltip';

import { myClamp } from '../../shared/utils';

import Arrow from '../../assets/icons/redArrowDown.svg?react';

import './MetricCard.scss';

const MetricCard = () => {
  return (
    <Tooltip
      title={<MetricCardTooltip />}
      placement="bottom"
      className="metric-card__tooltip"
    >
      <Flex
        flex="1 1 250px"
        vertical
        gap={myClamp(24)}
        justify="center"
        className="metric-card"
      >
        <Typography weight="600">Spend</Typography>
        <Flex vertical justify="space-between">
          <Typography size="32" weight="600">
            $29,696.04
          </Typography>
          <Flex gap={myClamp(6)} align="center">
            <Flex align="center" gap={myClamp(4)}>
              <Arrow width={myClamp(11)} height={myClamp(11)} />
              <Typography color="red" as="span">
                1.23%
              </Typography>
            </Flex>

            <Typography color="shark">vs previous 30 days</Typography>
          </Flex>
        </Flex>
      </Flex>
    </Tooltip>
  );
};

export default MetricCard;
