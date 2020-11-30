import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu, Segment, Sidebar,
} from 'semantic-ui-react';

import Links from '../../datas/links';

import './burgermenu.scss';

const BurgerMenu = ({ children, openMenu, setOpenMenu }) => {
  const location = useLocation();
  return (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        direction="left"
        animation="overlay"
        icon="labeled"
        onHide={() => setOpenMenu(false)}
        inverted
        vertical
        visible={openMenu}
        width="thin"
      >
        {Links.map((link) => (
          <Link key={link.name} to={link.slug} onClick={() => setOpenMenu(false)}>
            <Menu.Item active={location.pathname === link.slug} className="foodItems main__title">
              <Menu.Header>
                <FontAwesomeIcon icon={link.icon} size="3x" />
              </Menu.Header>
              {link.name}
            </Menu.Item>
          </Link>
        ))}
      </Sidebar>
      <Sidebar.Pusher dimmed={openMenu}>
        <Segment basic>
          {children}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  );
};

BurgerMenu.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BurgerMenu;
