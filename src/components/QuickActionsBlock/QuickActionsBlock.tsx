import { Flex } from 'antd';

import { myClamp } from '../../shared/utils';
import { Typography } from '../Typography/Typography';
import PlusIcon from '../../assets/icons/plusIcon.svg';
import FollowBrands from '../../assets/icons/followBrands.svg';

import './QuickActionsBlock.scss';

export const QuickActionsBlock = () => {
  return (
    <Flex vertical gap={myClamp(24)}>
      <Typography size="18" weight="600" as="h2">
        Quick actions
      </Typography>
      <Flex gap={myClamp(12)} justify="space-between" wrap>
        <Flex
          flex="1 1 420px"
          align="center"
          gap={myClamp(12)}
          className="action"
        >
          <img src={PlusIcon} alt="Quick action" className="action__icon" />
          <Flex vertical gap={myClamp(6)}>
            <Typography weight="600">Create new dashboard</Typography>
            <Typography color="shark">
              Grab insights into your creative performance
            </Typography>
          </Flex>
        </Flex>
        <Flex
          flex="1 1 420px"
          align="center"
          gap={myClamp(12)}
          className="action"
        >
          <img src={FollowBrands} alt="Quick action" className="action__icon" />
          <Flex vertical gap={myClamp(6)}>
            <Typography weight="600">Follow the Best Brands</Typography>
            <Typography color="shark">
              Explore ads from top brands to inspire your next campaign
            </Typography>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
