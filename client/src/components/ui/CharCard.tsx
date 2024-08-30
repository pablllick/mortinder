import { useState } from 'react';
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
  const [rotate, setRotate] = useState(0);

  const handleMouseEnterLeft = (): void => {
    setRotate(-1);
  };

  const handleMouseEnterRight = (): void => {
    setRotate(1);
  };

  const handleMouseLeave = (): void => {
    setRotate(0);
  };

  return (
    <div>
      <Card
        sx={{ width: 420 }}
        style={{
          transition: 'transform 0.3s ease',
          transform: rotate ? `rotate(${rotate * 25}deg)` : 'rotate(0deg)',
          transformOrigin: 'bottom',
          margin: 20,
        }}
      >
        <CardMedia sx={{ height: 500 }} image={char.image} title="your lover" />
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
      </Card>
      <div style={{ marginBottom: 20, display: 'flex', justifyContent: 'space-around' }}>
        <Button
          onMouseEnter={handleMouseEnterLeft}
          onMouseLeave={handleMouseLeave}
          variant="contained"
          sx={{ height: 50, width: 200 }}
          onClick={plusClickHandler}
          color="success"
        >
          Smash
        </Button>
        <Button
          sx={{ height: 50, width: 200 }}
          onMouseEnter={handleMouseEnterRight}
          onMouseLeave={handleMouseLeave}
          variant="contained"
          onClick={plusClickHandler}
          color="error"
        >
          Pass
        </Button>
      </div>
    </div>
  );
}
