import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../Section/Section';


const sexes = [
  {
    value: 'male',
    label: 'Masculino',
  },
  {
    value: 'female',
    label: 'Feminino',
  },
  {
    value: 'none',
    label: 'Prefiro não informar',
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

export default function ClientDataForm() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    sex: 'null',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (

    <Section title="Dados do cliente">
      <Grid container spacing={2}>

        <Grid item xs={12} sm={5} md={5} lg={5}>
          <TextField
            id="outlined-name"
            label="Name"
            placeholder="Nome do cliente aqui"
            className={classes.textField}
            value={values.name}
            onChange={handleChange('name')}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={5} md={5} lg={5}>
          <TextField
            id="outlined-email-input"
            label="Email"
            className={classes.textField}
            placeholder="Digite seu email aqui"
            type="email"
            name="email"
            autoComplete="email"
            onChange={handleChange('email')}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs={12} sm={2} md={2} lg={2}>
          <TextField
            id="outlined-select-currency"
            select
            label="Sexo"
            className={classes.textField}
            value={values.sex}
            onChange={handleChange('sex')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          >
            <MenuItem key="null" value="null" disabled>
              Selecione
            </MenuItem>

            {sexes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

    </Section>
  );
}
