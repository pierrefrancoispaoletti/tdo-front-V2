import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Grid, GridColumn, GridRow, Header, Image,
} from 'semantic-ui-react';
import logo from './logoFondNoir.svg';

import './title.scss';

const Title = ({ openMenu, setOpenMenu }) => (
  <Container className="title__container">
    <Grid columns={2}>
      <GridRow>
        <GridColumn>
          <Link to="/">
            <Header as="h1" color="grey">
              <Image src={logo} circular />
            </Header>
          </Link>
        </GridColumn>
        <GridColumn textAlign="right" verticalAlign="middle">
          <Button icon={{ name: 'bars' }} size="huge" className="buttonItems" circular onClick={() => setOpenMenu(!openMenu)} />
        </GridColumn>
      </GridRow>
    </Grid>
  </Container>
);

Title.propTypes = {
  openMenu: PropTypes.bool.isRequired,
  setOpenMenu: PropTypes.func.isRequired,
};

export default Title;
