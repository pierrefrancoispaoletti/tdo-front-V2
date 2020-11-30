import React from 'react';
import PropTypes from 'prop-types';
import { GridColumn, GridRow, Header } from 'semantic-ui-react';
import HeaderSubHeader from 'semantic-ui-react/dist/commonjs/elements/Header/HeaderSubheader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWineBottle } from '@fortawesome/free-solid-svg-icons';

const ItemComponent = ({ item }) => (
  <GridRow>
    <GridColumn>
      <Header as="h3" className="foodItems">
        {item.title.rendered}
        <HeaderSubHeader className="foodItems">
          {item.content.rendered.replace(/(<([^>]+)>)/gi, '')}
        </HeaderSubHeader>
      </Header>
      {item.meta.contenant !== undefined && (
      <span style={{ color: 'white', display: 'block' }}>
        {item.meta.contenant}
      </span>
      )}
      {item.meta.Couleur !== undefined && (
      <span>
        {item.meta.Couleur.includes('Rouge') && <FontAwesomeIcon icon={faWineBottle} style={{ color: '#C10501' }} size="lg" />}
        {item.meta.Couleur.includes('Blanc') && <FontAwesomeIcon icon={faWineBottle} style={{ color: '#E8EA8D' }} size="lg" />}
        {item.meta.Couleur.includes('Rosé') && <FontAwesomeIcon icon={faWineBottle} style={{ color: '#CF6021' }} size="lg" />}
      </span>
      )}
    </GridColumn>
    <GridColumn textAlign="right" className="foodItems">
      {item.meta.prix
            && (
            <GridColumn textAlign="right" className="foodItems">
              {item.meta.prix}€
            </GridColumn>
            )}
    </GridColumn>
  </GridRow>
);

ItemComponent.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ItemComponent;
