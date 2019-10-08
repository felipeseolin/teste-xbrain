import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ClientDataForm from '../../components/ClientDataForm/ClientDataForm';
import Section from '../../components/Section/Section';
import ProductsList from '../../components/ProductsList/ProductsList';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: 'orange',
    color: '#fff',
    height: '100%',
  },
}));

export default function BuyPage() {
  const classes = useStyles();

  const [total, setTotal] = useState(0);

  const handleChange = (value) => {
    setTotal(total + value);
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Section title="Produtos">
            <ProductsList total={total} onChange={handleChange} />
          </Section>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <ClientDataForm />
          </Grid>

          <Grid container spacing={1} justify="flex-end" alignContent="flex-end" alignItems="flex-end">
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="h6" component="h6">
                <Grid container spacing={1} justify="flex-end" alignContent="flex-end" alignItems="flex-end">
                  Total: R$ 15,00
                </Grid>
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container spacing={1} justify="flex-end" alignContent="flex-end" alignItems="flex-end">

                <Button
                  variant="contained"
                  href="#contained-buttons"
                  className={classes.button}
                >
                  Finalizar Compra
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
