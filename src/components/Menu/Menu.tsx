import { MenuItem } from '../Sidebar/constants';
import { Typography } from '../Typography/Typography';

import './Menu.scss';

type MenuProps = {
  items: MenuItem[];
};

const Menu = ({ items }: MenuProps) => {
  return (
    <ul className="menu">
      {items.map((item) => (
        <li key={item.key} className="menu-item">
          <img src={item.icon} alt={item.label} className="menu-item__icon" />
          <Typography
            as="span"
            lineHeight="90"
            color="dark"
            className="menu-item__label"
          >
            {item.label}
          </Typography>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
