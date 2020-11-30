import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Divider,
  Grid,
  Menu,
} from 'semantic-ui-react';
import { compareObjects } from '../../../utils/utils';
import ItemTitle from '../ItemTitle/ItemTitle';
import LoaderComponent from '../../Loader/Loader';
import ItemComponent from '../ItemComponent/ItemComponent';

const Cuisine = ({ title }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tagliate, setTagliate] = useState([]);
  const [pasta, setPasta] = useState([]);
  const [antipasti, setAntipasti] = useState([]);
  const [carne, setCarne] = useState([]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    const tagliateReq = Axios.get('https://le-tdo.com/wp-json/wp/v2/tagliate');
    const pastaReq = Axios.get(
      'https://le-tdo.com/wp-json/wp/v2/ptes_et_risottos',
    );
    const antipastiReq = Axios.get(
      'https://le-tdo.com/wp-json/wp/v2/les_antipasti',
    );
    const carneReq = Axios.get('https://le-tdo.com/wp-json/wp/v2/la_carne');
    Axios.all([tagliateReq, pastaReq, antipastiReq, carneReq]).then(
      Axios.spread((...responses) => {
        if (mounted) {
          setTagliate(responses[0].data);
          setPasta(responses[1].data);
          setAntipasti(responses[2].data);
          setCarne(responses[3].data);
          setLoading(false);
          setItems(responses[2].data);
        }
      }),
    );
    return function cleanup() {
      mounted = false;
    };
  }, []);
  return (
    <Container>
      <ItemTitle title={title} />
      <Divider />
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
      <Divider />
      {loading === true && <LoaderComponent />}
      {loading === false && (
        <Grid columns={2}>
          {items.map((item) => (
            <ItemComponent key={item.id} item={item} />
          ))}
        </Grid>
      )}
    </Container>
  );
};

Cuisine.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Cuisine;
