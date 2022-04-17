// https://question-it.com/questions/2713422/pochemu-reactfc-ne-pozvoljaet-mne-prosto-vozvraschat-detej
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import React from 'react';

const HideOnScroll: React.FC = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <>{children}</>
    </Slide>
  );
};

export default HideOnScroll;
