import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import './styles.css';

const useStyles = makeStyles({
  card: {
    minWidth: '100%',
    padding: 10,
  },
  price: {
    color: '#7AB3D2',
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
  },
  image: {
    height: 100,
    margin: 15,
  },
  btn: {
    backgroundColor: '#FA981C',
    color: '#fff',
  },
});

export default function FinishPage() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} sm={12} md={10} lg={3}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              <Grid container justify="center" alignContent="center" alignItems="center">
                John Doe
              </Grid>
            </Typography>
            <Typography color="textSecondary">
              <Grid container justify="center" alignContent="center" alignItems="center">
                Sua compra no valor de
                {' '}
                <span className={classes.price}>R$ 299,00</span>
                {' '}
                foi finalizada com sucesso
              </Grid>
            </Typography>

            <Grid container justify="center" alignContent="center" alignItems="center">
              <img src={`${process.env.PUBLIC_URL}/purchase.png`} alt="Ícone de joinha" className={classes.image} />
            </Grid>

          </CardContent>
          <CardActions>
            <Grid container justify="center" alignContent="center" alignItems="center">

              <Button size="large" className={classes.btn} component={Link} to="/">
                Iniciar nova compra
              </Button>

            </Grid>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
