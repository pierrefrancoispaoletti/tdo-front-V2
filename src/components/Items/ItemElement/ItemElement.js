import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Divider, Grid, Transition,
} from 'semantic-ui-react';
import { axiosCall } from '../../../utils/axiosCalls';
import { compareObjects } from '../../../utils/utils';
import LoaderComponent from '../../Loader/Loader';
import ItemComponent from '../ItemComponent/ItemComponent';
import ItemTitle from '../ItemTitle/ItemTitle';

const ItemElement = ({ endpoint, title, MenuComponent }) => {
  const [mounted, setMounted] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState('');
  const [itemsCategory, setItemsByCategory] = useState([]);

  useEffect(() => {
    setMounted(true);
    setLoading(true);
    axiosCall(endpoint)
      .then((response) => {
        const AllItems = response.data;
        if (!mounted) {
          setItems(AllItems.sort((item1, item2) => compareObjects(item1, item2, 'meta')));
          setItemsByCategory(AllItems.sort((item1, item2) => compareObjects(item1, item2, 'meta')));
          setLoading(false);
        }
      });
    return function cleanup() {
      setMounted(false);
    };
  }, []);
  return (
    <Transition
      visible={mounted}
      animation="fly left"
      duration={1000}
    >
      <Container>
        <ItemTitle title={title} />
        <Divider />
        { MenuComponent !== undefined
      && (
        <>
          <MenuComponent
            items={items}
            categories={categories}
            setCategories={setCategories}
            setItemsByCategory={setItemsByCategory}
          />
          <Divider />
        </>
      )}
        {loading === true && <LoaderComponent />}
        {loading === false
      && (
      <Grid columns={2}>
        {itemsCategory.map((item) => (
          <ItemComponent key={item.id} item={item} />
        ))}
      </Grid>
      )}
      </Container>
    </Transition>
  );
};

ItemElement.defaultProps = {
  MenuComponent: undefined,
};

ItemElement.propTypes = {
  endpoint: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  MenuComponent: PropTypes.elementType,
};

export default ItemElement;
