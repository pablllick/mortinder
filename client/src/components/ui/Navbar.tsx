import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

export default function SearchAppBar(): JSX.Element {
  return (
    <AppBar position="static" style={{ background: 'linear-gradient(#f02e75, #e66465)' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{}} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          style={{fontSize: 40}}
        >
          Mortinder
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
