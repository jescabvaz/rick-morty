import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


function Nav() {
  const [value, setValue] = useState();

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
        <BottomNavigationAction label="Personajes" component={Link} to="/"  />
        <BottomNavigationAction label="Episodios" component={Link} to="/episodes" />

      </BottomNavigation>
    </Box>

    </>
  )
}

export default Nav