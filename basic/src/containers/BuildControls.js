import React from 'react';
import BuildControl from '../components/BuildControl';

import '../stylesheets/containers/BuildControls.css';

class BuildControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: [
        { label: 'Salad', type: 'salad'},
        { label: 'Bacon', type: 'bacon'},
        { label: 'Cheese', type: 'cheese'},
        { label: 'Meat', type: 'meat'}
      ]
    };
  }
  render() {
    const { controls } = this.state;
    const control = controls.map(ctrl =>
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => this.props.ingredientAdd(ctrl.type)}
        removed={() => this.props.ingredientRemove(ctrl.type)}
        disable={this.props.disabled[ctrl.type]}
      />
    );
    return (
      <div className="BuildControls">
        <p>Current price: <strong>{this.props.price.toFixed(2)}</strong></p>
        {control}
        <button
          disabled={!this.props.purchasable}
          className="OrderButton"
        >
          PURCHASE NOW!
        </button>
      </div>
    );
  }
}

export default BuildControls;
