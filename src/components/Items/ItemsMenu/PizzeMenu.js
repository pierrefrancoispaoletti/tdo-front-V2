import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { filterObjectsByCategory } from '../../../utils/utils';

const PizzeMenu = ({
  items, categories, setItemsByCategory, setCategories,
}) => (
  <Menu size="tiny" compact widths={3} className="menu__categories">
    <Menu.Item
      name="toutes"
      active={categories === ''}
      onClick={() => {
        setCategories('');
        filterObjectsByCategory(items, '', setItemsByCategory);
      }}
    />
    <Menu.Item
      name="Les crèatives"
      active={categories === 'les créatives'}
      onClick={() => {
        setCategories('Les créatives');
        filterObjectsByCategory(items, 'Les créatives', setItemsByCategory);
      }}
    />
    <Menu.Item
      name="les classiques"
      active={categories === 'Les classiques'}
      onClick={() => {
        setCategories('Les classiques');
        filterObjectsByCategory(items, 'Les classiques', setItemsByCategory);
      }}
    />
  </Menu>
);

PizzeMenu.propTypes = {
  items: PropTypes.arrayOf(object.isRequired).isRequired,
  categories: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
  setItemsByCategory: PropTypes.func.isRequired,
};

export default PizzeMenu;
