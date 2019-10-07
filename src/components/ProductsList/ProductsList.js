import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';

import Product from '../Product/Product';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  progress: {
    margin: theme.spacing(2),
  },
}));

export default function ProductsList() {
  const classes = useStyles();
  const [products, setProducts] = useState(null);

  const getProducts = async () => {
    const port = 3005;
    const url = `http://localhost:${port}/products`;

    const response = await axios.get(url);
    return response.data;
  };

  useEffect(async () => {
    const allProducts = await getProducts();
    setProducts(allProducts);
  }, []);

  return (
    <Grid container spacing={1}>
      {products ? (
        products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            photo={product.photo}
            price={product.price}
            numParcelas={product.numParcelas}
            priceParcela={product.priceParcela}
            porcentagemDesconto={product.porcentagemDesconto}
            priceAVista={product.priceAVista}
          />
        ))
      ) : (
        <CircularProgress className={classes.progress} />
      )}
    </Grid>
  );
}
