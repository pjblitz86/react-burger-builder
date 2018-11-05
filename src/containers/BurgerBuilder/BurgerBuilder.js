import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Hoc>
          <div>Burger</div>
          <div>Build Controls</div>
        </Hoc>
      </div>
    );
  }
}

export default BurgerBuilder;
