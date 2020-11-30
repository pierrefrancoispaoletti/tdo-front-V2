import React from 'react';
import {
  Container, Divider, Grid, GridColumn, GridRow, Header, Image,
} from 'semantic-ui-react';
import pizza from './pizza.jpeg';

import '../../styles/items.scss';

const Main = () => (
  <Container>
    <Header as="h1" textAlign="center" className="foodItems main__title">
      Le temps des Oliviers
    </Header>
    <Divider />
    <Grid columns={2} divided stackable>
      <GridRow>
        <GridColumn>
          <Container as="span" className="foodItems">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore
            possimus ex accusamus, perspiciatis nulla error pariatur unde neque non et.
            Officia ut accusamus ad recusandae! Cupiditate assumenda saepe eaque
            accusamus aspernatur neque labore magnam dicta? Temporibus
            quae voluptatibus explicabo quis illum earum debitis sapiente
            placeat, sint consequuntur rerum voluptate.
          </Container>
        </GridColumn>
        <GridColumn>
          <Image src={pizza} />
        </GridColumn>
      </GridRow>
    </Grid>
  </Container>
);

export default Main;
