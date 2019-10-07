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

          <Typography variant="h6" component="h6">
            Total: R$ 15,00
          </Typography>
          <Button
            variant="contained"
            href="#contained-buttons"
            className={classes.button}
          >
            Finalizar Compra
          </Button>
        </Grid>
      </Container>
    </>
  );
}
