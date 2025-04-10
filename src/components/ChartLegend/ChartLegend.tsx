import React from 'react';
import { Flex } from 'antd';

import { myClamp } from '../../shared/utils';
import { Typography } from '../Typography/Typography';
import LegendIcon from '../LegendIcon/LegendIcon';
import { LegendData } from './types';

type LegendProps = {
  data: LegendData[];
  onLegendChange: (name: string, isSelected: boolean) => void;
  legendSelection: { [key: string]: boolean };
};

const Legend: React.FC<LegendProps> = ({
  data,
  onLegendChange,
  legendSelection,
}) => {
  return (
    <Flex gap={myClamp(20)}>
      {data.map((item) => (
        <Flex
          key={item.name}
          align="center"
          style={{ cursor: 'pointer' }}
          onClick={() => onLegendChange(item.name, !legendSelection[item.name])}
        >
          <LegendIcon color={item.color} type={item.type} />
          <Typography>
            {'— '}
            {item.name}
          </Typography>
        </Flex>
      ))}
    </Flex>
  );
};

export default Legend;
