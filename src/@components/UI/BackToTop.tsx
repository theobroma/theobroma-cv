import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import Box from '@mui/material/Box';
import React from 'react';

const BackToTop = ({ children }: { children?: React.ReactNode }) => {
  const trigger = useScrollTrigger();

  // TODO: mb React.MouseEvent<HTMLElement>
  const handleClick = (event: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', zIndex: 2, bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
};

export default BackToTop;
