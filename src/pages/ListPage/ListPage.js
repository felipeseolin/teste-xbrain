import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ClientDataForm from '../../components/ClientDataForm/ClientDataForm';
import Section from '../../components/Section/Section';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function ListPage() {

  const [products, setProducts] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const port = 3005;
    const url = `http://localhost:${port}/products`;

    axios
      .get(url)
      .then((productsResult) => {
        setProducts(productsResult.data);
        console.log(products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <CssBaseline/>
      <Container maxWidth="md">
        <Grid container spacing={3}>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Section title="Produtos">
              <p>
                {products ? 'chegou!' : 'nada'}
              </p>
            </Section>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ClientDataForm/>
          </Grid>

          <h3>Total: R$ 15,00</h3>
          <Button variant="contained" href="#contained-buttons" className={classes.button}>
            Finalizar Compra
          </Button>

        </Grid>
      </Container>
    </>
  );
}
