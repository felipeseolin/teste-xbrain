import React from 'react';
import {Container, Typography} from "@material-ui/core";

export default function ProductPage() {
  return (
    <Container>
      <Typography>
        {this.props.name}
      </Typography>
    </Container>
  );
}
