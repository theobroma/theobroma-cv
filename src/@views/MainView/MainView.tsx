import { Container, Grid } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

const MainView: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            MainView
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MainView;
