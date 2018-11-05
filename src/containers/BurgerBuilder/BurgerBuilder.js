import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Hoc>
          <Burger />
          <div>Build Controls</div>
        </Hoc>
      </div>
    );
  }
}

export default BurgerBuilder;
