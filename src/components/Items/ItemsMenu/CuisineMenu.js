import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { compareObjects } from '../../../utils/utils';

const CuisineMenu = ({
  setItems, items, antipasti, tagliate, carne, pasta,
}) => (

  <Menu
    size="tiny"
    compact
    widths={4}
    className="menu__categories"
    activeIndex="1"
  >
    <Menu.Item
      index={1}
      name="antipasti"
      active={items.type === 'antipasti'}
      onClick={() => {
        setItems(
          antipasti.sort((item1, item2) => compareObjects(item1, item2, 'meta')),
        );
      }}
    />
    <Menu.Item
      name="tagliate"
      active={items.type === 'tagliates'}
      onClick={() => {
        setItems(
          tagliate.sort((item1, item2) => compareObjects(item1, item2, 'meta')),
        );
      }}
    />
    <Menu.Item
      name="pasta"
      active={items.type === 'pasta e risotti'}
      onClick={() => {
        setItems(
          pasta.sort((item1, item2) => compareObjects(item1, item2, 'meta')),
        );
      }}
    />
    <Menu.Item
      name="la carne"
      active={items.type === 'carne'}
      onClick={() => {
        setItems(
          carne.sort((item1, item2) => compareObjects(item1, item2, 'meta')),
        );
      }}
    />
  </Menu>
);

CuisineMenu.propTypes = {
  tagliate: PropTypes.arrayOf(object.isRequired).isRequired,
  carne: PropTypes.arrayOf(object.isRequired).isRequired,
  antipasti: PropTypes.arrayOf(object.isRequired).isRequired,
  pasta: PropTypes.arrayOf(object.isRequired).isRequired,
  setItems: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(object.isRequired).isRequired,
};

export default CuisineMenu;
