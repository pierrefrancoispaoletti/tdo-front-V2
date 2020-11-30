import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { filterObjectsByCategory } from '../../../utils/utils';

const BoissonsMenu = ({
  items, categories, setItemsByCategory, setCategories,
}) => (
  <Menu size="mini" compact widths={5} className="menu__categories">
    <Menu.Item
      name="toutes"
      active={categories === ''}
      onClick={() => {
        setCategories('');
        filterObjectsByCategory(items, '', setItemsByCategory);
      }}
    />
    <Menu.Item
      name="Alcools"
      active={categories === 'Alcools'}
      onClick={() => {
        setCategories('Alcools');
        filterObjectsByCategory(items, 'Alcools', setItemsByCategory);
      }}
    />
    <Menu.Item
      name="Spiritueux"
      active={categories === 'Spiritueux'}
      onClick={() => {
        setCategories('Spiritueux');
        filterObjectsByCategory(items, 'Spiritueux', setItemsByCategory);
      }}
    />
    <Menu.Item
      name="Bières"
      active={categories === 'Bières'}
      onClick={() => {
        setCategories('Bières');
        filterObjectsByCategory(items, 'Bières', setItemsByCategory);
      }}
    />
    <Menu.Item
      name="Divers"
      active={categories === 'Divers'}
      onClick={() => {
        setCategories('Divers');
        filterObjectsByCategory(items, 'zdivers', setItemsByCategory);
      }}
    />
  </Menu>
);

BoissonsMenu.propTypes = {
  items: PropTypes.arrayOf(object.isRequired).isRequired,
  categories: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
  setItemsByCategory: PropTypes.func.isRequired,
};

export default BoissonsMenu;
