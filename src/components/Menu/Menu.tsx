import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { Typography } from '../Typography/Typography';

import { MenuItem } from '../Sidebar/constants';

import './Menu.scss';

type MenuProps = {
  items: MenuItem[];
};

const Menu = ({ items }: MenuProps) => {
  return (
    <ul className="menu">
      {items.map((item) => (
        <NavLink
          key={item.key}
          to={item.key || '#'}
          className={({ isActive }) =>
            clsx('menu-item', {
              'menu-item--active': isActive,
            })
          }
        >
          <img src={item.icon} alt={item.label} className="menu-item__icon" />
          <Typography
            as="span"
            lineHeight="90"
            color="dark"
            weight="500"
            className="menu-item__label"
          >
            {item.label}
          </Typography>
        </NavLink>
      ))}
    </ul>
  );
};

export default Menu;
