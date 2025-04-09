import { Flex } from 'antd';

import { items, reportsGroupItems } from './constants';
import Menu from '../Menu/Menu';
import AccountButton from '../AccountButton/AccountButton';
import { myClamp } from '../../shared/utils';
import './Sidebar.scss';
import { Typography } from '../Typography/Typography';

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
