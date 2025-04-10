import { Flex } from 'antd';

import { Typography } from '../Typography/Typography';

import { myClamp } from '../../shared/utils';

import AccountIcon from '../../assets/icons/accountIcon.svg?react';
import Carret from '../../assets/icons/carret.svg?react';

import './AccountButton.scss';

const AccountButton = () => {
  return (
    <Flex className="account-button" align="center" gap={myClamp(2)}>
      <Flex align="center" gap={myClamp(8)}>
        <AccountIcon className="account-button__icon" />
        <Typography
          weight="500"
          lineHeight="90"
          className="account-button__text"
        >
          Inc Ze
        </Typography>
      </Flex>
      <Carret className="account-button__carret" />
    </Flex>
  );
};

export default AccountButton;
