import React, { Component } from 'react';

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

class ContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      srcIndex: 0
    };
  }

  render() {
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          setSrcIndex: srcIndex => this.setState({ srcIndex })
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;
