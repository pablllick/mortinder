import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import type { PersonType } from '../type/charTypes';

type CharCardPropsType = {
  char: PersonType;
  plusClickHandler: void;
};

export default function CharCard({ char, plusClickHandler }: CharCardPropsType): JSX.Element {
  return (
    <Card sx={{ width: 500 }}>
      <CardMedia sx={{ height: 600 }} image={char.image} title="your lover" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {char.name}
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          {char.status}
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          {char.gender}
        </Typography>
      </CardContent>
      <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-around' }}>
        <Button
          variant="contained"
          sx={{ height: 50, width: 200 }}
          onClick={plusClickHandler}
          color="success"
        >
          Smash
        </Button>
        <Button
          sx={{ height: 50, width: 200 }}
          variant="contained"
          onClick={plusClickHandler}
          color="error"
        >
          Pass
        </Button>
      </div>
    </Card>
  );
}
