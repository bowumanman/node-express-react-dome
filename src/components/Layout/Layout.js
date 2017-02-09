
import React, { PropTypes } from 'react';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render(){
    return (
      <div>
        <div>Head</div>
        {this.props.children}
        <div>left</div>
      </div>
    )
  }
}

export default Layout;
