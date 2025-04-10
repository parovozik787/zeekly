import { Flex } from 'antd';

import Menu from '../Menu/Menu';
import AccountButton from '../AccountButton/AccountButton';
import { Typography } from '../Typography/Typography';

import { items, reportsGroupItems } from './constants';
import { myClamp } from '../../shared/utils';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <Flex vertical gap={myClamp(32)}>
        <Flex vertical gap={myClamp(22)}>
          <AccountButton />
          <Menu items={items} />
        </Flex>
        <Flex vertical gap={myClamp(24)} className="sidebar__submenu">
          <Typography weight="600" color="dark" lineHeight="90">
            Reports
          </Typography>
          <Menu items={reportsGroupItems} />
        </Flex>
      </Flex>
    </aside>
  );
};

export default Sidebar;
