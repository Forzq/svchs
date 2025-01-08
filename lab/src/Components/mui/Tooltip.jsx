import * as React from 'react';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import cart from '../../img/cart.png'

export default function BasicTooltip() {
  return (
    <Tooltip title="Cart">
      <IconButton>
        <img src={cart} alt="" />
      </IconButton>
    </Tooltip>
  );
}