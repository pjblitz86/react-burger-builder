import React from 'react';
import Hoc from '../../hoc/Hoc';

const layout = props => (
  <Hoc>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Hoc>
);

export default layout;
