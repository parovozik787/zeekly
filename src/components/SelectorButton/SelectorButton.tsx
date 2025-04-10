import { Flex } from 'antd';

import { Typography } from '../Typography/Typography';
import { myClamp } from '../../shared/utils';
import Calendar from '../../assets/icons/calendar.svg?react';
import ArrowDown from '../../assets/icons/arrowDown.svg?react';

import './SelectorButton.scss';

export const SelectorButton = () => {
  return (
    <Flex className="selector-button" align="center" gap={myClamp(8)}>
      <Calendar className="selector-button__calendar-icon" />
      <Typography weight="500" lineHeight="90">
        Last 30-days
      </Typography>
      <ArrowDown className="selector-button__arrow-down" />
    </Flex>
  );
};
