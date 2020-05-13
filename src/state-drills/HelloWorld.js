import React from 'react';


class HelloWorld extends React.Component { 
    constructor(props) { 
        super(props) 
        this.state = { who: ''} 
    }

    handleWorldClick = () => { this.setState({ who: 'world' }) }
    handleReactClick = () => { this.setState({ who: 'react' }) }
    handleFriendClick = () => { this.setState({ who: 'friend' }) }

render() {
    return (
      <div>
          <button onClick={this.handleWorldClick()}>World</button>
          <button onClick={this.handleReactClick()}>React</button>
          <button onClick={this.handleFriendClick()}>Friend</button>
        <p>
            Hello {this.state.who}
            
        </p>
      </div>
    )
}
}

export default HelloWorld;