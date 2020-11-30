import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Menu } from 'semantic-ui-react';
import { filterObjectsByCategory } from '../../../utils/utils';

const CicchetteriaMenu = ({
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
      name="A la carte ce soir"
      active={categories === 'A la carte de soir'}
      onClick={() => {
        setCategories('A la carte de soir');
        filterObjectsByCategory(items, 'A la carte de soir', setItemsByCategory);
      }}
    />
    <Menu.Item
      name="Le coin de la Truffe"
      active={categories === 'Le coin de la Truffe'}
      onClick={() => {
        setCategories('Le coin de la Truffe');
        filterObjectsByCategory(items, 'Le coin de la Truffe', setItemsByCategory);
      }}
    />
  </Menu>
);

CicchetteriaMenu.propTypes = {
  items: PropTypes.arrayOf(object.isRequired).isRequired,
  categories: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
  setItemsByCategory: PropTypes.func.isRequired,
};

export default CicchetteriaMenu;
