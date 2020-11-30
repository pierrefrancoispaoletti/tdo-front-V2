import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Divider,
  Grid,
  Transition,
} from 'semantic-ui-react';
import ItemTitle from '../ItemTitle/ItemTitle';
import LoaderComponent from '../../Loader/Loader';
import ItemComponent from '../ItemComponent/ItemComponent';
import {
  antipastiReq, carneReq, pastaReq, tagliateReq,
} from '../../../utils/axiosCalls';

const Cuisine = ({ title, MenuComponent }) => {
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tagliate, setTagliate] = useState([]);
  const [pasta, setPasta] = useState([]);
  const [antipasti, setAntipasti] = useState([]);
  const [carne, setCarne] = useState([]);

  useEffect(() => {
    setMounted(true);
    setLoading(true);
    Axios.all([
      tagliateReq,
      pastaReq,
      antipastiReq,
      carneReq,
    ]).then(
      Axios.spread((...responses) => {
        if (!mounted) {
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
        <MenuComponent
          items={items}
          setItems={setItems}
          tagliate={tagliate}
          antipasti={antipasti}
          pasta={pasta}
          carne={carne}
        />
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
    </Transition>
  );
};

Cuisine.propTypes = {
  title: PropTypes.string.isRequired,
  MenuComponent: PropTypes.elementType.isRequired,
};

export default Cuisine;
