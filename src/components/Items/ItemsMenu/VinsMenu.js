import React from 'react';
import PropTypes, { object } from 'prop-types';
import { Menu } from 'semantic-ui-react';

const VinsMenu = ({
  items, categories, setItemsByCategory, setCategories,
}) => {
  const filterObjectsByContenant = (allItems, cl) => {
    const newContenant = allItems.filter((item) => item.meta.contenant[0] === cl);
    setItemsByCategory(newContenant);
  };

  const filterObjectsByColor = (allItems, color) => {
    const newContenant = allItems.filter((item) => item.meta.Couleur.includes(color));
    setItemsByCategory(newContenant);
  };

  const filterObjectsByAll = (allItems) => {
    setItemsByCategory(allItems);
  };
  return (
    <Menu size="mini" compact widths={5} className="menu__categories">
      <Menu.Item
        name="toutes"
        active={categories === ''}
        onClick={() => {
          setCategories('');
          filterObjectsByAll(items);
        }}
      />
      <Menu.Item
        name="Rouge"
        active={categories === 'Rouge'}
        onClick={() => {
          setCategories('Rouge');
          filterObjectsByColor(items, 'Rouge');
        }}
      />
      <Menu.Item
        name="Blanc"
        active={categories === 'Blanc'}
        onClick={() => {
          setCategories('Blanc');
          filterObjectsByColor(items, 'Blanc');
        }}
      />
      <Menu.Item
        name="Rosé"
        active={categories === 'Rosé'}
        onClick={() => {
          setCategories('Rosé');
          filterObjectsByColor(items, 'Rosé');
        }}
      />
      <Menu.Item
        name="Les 50"
        active={categories === 'Les 50cl'}
        onClick={() => {
          setCategories('Les 50cl');
          filterObjectsByContenant(items, '50 cl');
        }}
      />
    </Menu>
  );
};

VinsMenu.propTypes = {
  items: PropTypes.arrayOf(object.isRequired).isRequired,
  categories: PropTypes.string.isRequired,
  setCategories: PropTypes.func.isRequired,
  setItemsByCategory: PropTypes.func.isRequired,
};

export default VinsMenu;
