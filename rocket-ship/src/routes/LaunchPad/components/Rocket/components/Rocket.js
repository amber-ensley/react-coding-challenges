import React, { useState, Component } from 'react';
import RocketCore from './RocketCore';

export const FunctionalRocket = React.memo(() => {
  const [initialLaunchTime] = useState(Date.now());
  

  return <RocketCore initialLaunchTime={initialLaunchTime} />;
})

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.initialLaunchTime === nextState.initialLaunchTime) {
      return false
    } else {
      return true;
    }
  }

  render() {
    const { initialLaunchTime } = this.state;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
