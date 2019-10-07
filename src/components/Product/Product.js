import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

import {maskPrice} from '../../utils/maks';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: 600,
    borderWidth: 0,
    border: 'none',
    shadowColor: 'none',
  },
  button: {
    margin: theme.spacing(1),
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
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
      setValues({...values, [nameInput]: event.target.value});
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
        <CardActions />
        <Grid container spacing={1}>
          <Fab
            color="primary"
            aria-label="add"
            className={classes.fab}
            onClick={handleChange('number', false)}
          >
            <Remove/>
          </Fab>
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <TextField
              id="number"
              value={values.number}
              onChange={handleChange('number')}
              type="number"
              className={classes.textField}
              InputLabelProps={{
                shrink: false,
              }}
              margin="normal"
              variant="filled"
            />
          </Grid>
          <Fab
            color="primary"
            aria-label="add"
            className={classes.fab}
            onClick={handleChange('number', true)}
          >
            <AddIcon/>
          </Fab>

          <Button>Teste</Button>
        </Grid>

        <Button variant="contained" color="primary" className={classes.button}>
          Adicionar
        </Button>
      </Card>
    </Grid>
  );
}
