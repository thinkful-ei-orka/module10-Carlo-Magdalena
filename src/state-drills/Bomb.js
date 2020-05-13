import React from 'react';


class Bomb extends React.Component { 
    constructor(props) { 
        super(props) 
        this.state = { count: 0 } 
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.interval = setInterval(() => {
          console.log('setInterval')

          this.setState({
            count: this.state.count + 1
          })
        }, 1000)
      }
    componentWillUnmount() {
      clearInterval(this.interval)
    }

    bombCount = () => {
      let bombResponse = '';
      let bombCounter = this.state.count;

      if(bombCounter >= 8) {
        bombResponse = 'BOOM!!!!';
        clearInterval(this.interval);
      }else if(bombCounter % 2 === 0) {
        bombResponse = 'tick';
      } else if(bombCounter % 2 !== 0) {
        bombResponse = 'tock';
      } 

      console.log(bombResponse);
      return bombResponse;
    }
    render() {
        return (
        <div>
            <p>  
                {this.bombCount()}          
            </p>
        </div>
        )
    }
}

export default Bomb;