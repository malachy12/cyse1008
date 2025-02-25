import { useState } from 'react';

import Box from '@mui/material/Box';
import { StoreInfo } from './StoreInfo'; // Importing StoreInfo component
import Button from '@mui/material/Button';

export function HomeHeroCYSE1008() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Hello World */}
    <Box
      sx={{
        backgroundColor: '#f0f0f0', 
        padding: 4,
        textAlign: 'center',
        fontSize: '2rem',
        color: '#3f51b5', 
        marginTop: 2,
        borderRadius: 2,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <h1>Mr MALACHY STORE</h1> 

      <StoreInfo /> 

      <Button
        variant="contained"
        color="primary"
        onClick={() => setCount(count + 1)}
        sx={{
          fontSize: '1rem',
          padding: '8px 16px',
          borderRadius: '8px',
        }}
      >
        Item {count}
      </Button>
    </Box>
    </div>
  );
}
