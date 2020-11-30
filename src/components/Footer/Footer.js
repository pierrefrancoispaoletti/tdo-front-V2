import React from 'react';
import {
  Container,
  Divider,
  Grid, GridColumn, GridRow, List,
} from 'semantic-ui-react';

import './footer.scss';
import '../../styles/items.scss';

const Footer = () => (
  <Container className="footer__container">
    <Grid columns={2} divided>
      <GridRow>
        <GridColumn>
          <List>
            <List.Item>
              <List.Header className="footer__container__header main__title">
                Contact
              </List.Header>
              <Divider />
              <List.Icon name="mail" color="teal" />
              <List.Content>
                <a href="mailto:vava@tdo.fr">Vava@tdo.fr</a>
              </List.Content>
            </List.Item>
          </List>
        </GridColumn>
        <GridColumn>
          <List>
            <List.Item>
              <List.Header className="footer__container__header main__title">
                Suivez nous sur :
              </List.Header>
              <Divider />
              <List.Content floated="right">
                <List.Icon name="facebook" color="blue" size="big" link />
                <List.Icon name="instagram" color="purple" size="big" link />
              </List.Content>
            </List.Item>
          </List>
        </GridColumn>
      </GridRow>
    </Grid>
    <Grid>
      <GridRow className="footer__container__header" centered> ©opyright Le Temps des Oliviers</GridRow>
    </Grid>
  </Container>
);

export default Footer;
