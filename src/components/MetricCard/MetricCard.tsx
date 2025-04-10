import { Flex, Tooltip } from 'antd';

import { Typography } from '../Typography/Typography';
import { MetricCardTooltip } from '../MetricCardTooltip/MetricCardTooltip';

import { Metric } from '../MetricsBlock/types';

import { myClamp } from '../../shared/utils';

import Arrow from '../../shared/icons/redArrowDown.svg?react';

import './MetricCard.scss';
import clsx from 'clsx';

type MetricCardProps = Metric;

const MetricCard = ({ label, value, change, isPositive }: MetricCardProps) => {
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
        <Typography weight="600">{label}</Typography>
        <Flex vertical justify="space-between" gap={myClamp(2)}>
          <Typography size="32" weight="600">
            {value}
          </Typography>
          <Flex gap={myClamp(9)} align="center">
            <Flex align="center" gap={myClamp(6)}>
              <Arrow
                width={myClamp(11)}
                height={myClamp(11)}
                className={clsx({
                  'metric-card__arrow--positive': isPositive,
                  'metric-card__arrow--negative': !isPositive,
                })}
              />
              <Typography
                color={isPositive ? 'green' : 'red'}
                as="span"
                weight="600"
              >
                {change}%
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
