import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

import { maskPrice } from '../../utils/maks';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: 650,
    borderWidth: 0,
    border: 'none',
    shadowColor: 'none',
  },
  button: {
    margin: theme.spacing(1),
    width: '90%',
  },
  input: {
    backgroundColor: 'white',
    textAlign: 'center',
  },
  fab: {
    width: 35,
    height: 35,
    backgroundColor: 'gray',
  },
}));

export default function Product({
  name,
  photo,
  price,
  numParcelas,
  priceParcela,
  priceAVista,
  porcentagemDesconto,
}) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    number: 0,
  });

  const handleChange = (nameInput, isAdd) => (event) => {
    if (isAdd === undefined) {
      setValues({ ...values, [nameInput]: parseInt(event.target.value, 10) });
    } else {
      setValues({
        ...values,
        [nameInput]: isAdd ? values.number + 1 : values.number - 1,
      });
    }
  };

  return (
    <Grid item xs={12} sm={4} md={3} lg={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={`Produto: ${name}`}
            height="300"
            image={process.env.PUBLIC_URL + photo}
            title={name}
          />
          <CardContent>
            <Typography variant="body2" color="textPrimary" component="p">
              {name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {`R$ ${maskPrice(price)}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`Em até ${numParcelas}x de R$ ${maskPrice(priceParcela)}`}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {`R$ ${maskPrice(
                priceAVista,
              )} à vista (${porcentagemDesconto}% de desconto)`}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Grid container spacing={1} alignItems="center" justify="center">
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <Fab
              id="minum"
              color="primary"
              aria-label="add"
              className={classes.fab}
              onClick={handleChange('number', false)}
            >
              <Remove />
            </Fab>
          </Grid>
          <Grid item xs={7} sm={7} md={7} lg={7}>
            <TextField
              id="number"
              value={values.number}
              onChange={handleChange('number')}
              type="number"
              className={classes.input}
              InputLabelProps={{
                shrink: false,
              }}
              margin="normal"
              variant="filled"
            />
          </Grid>

          <Grid item xs={2} sm={2} md={2} lg={2}>
            <Fab
              color="primary"
              aria-label="add"
              className={classes.fab}
              onClick={handleChange('number', true)}
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Button variant="contained" color="primary" className={classes.button}>
              Adicionar
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
