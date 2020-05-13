import React from 'react';


class RouletteGun extends React.Component { 
    constructor(props) { 
        super(props) 
        this.state = { 
            chamber: null,
            spinningTheChamber: false
        } 
    }
    handleButtonClick = () => {

        this.setState({
            spinningTheChamber: true
        })

        setTimeout(() => {
            let rand = Math.ceil(Math.random() * 8);
            this.setState({
                spinningTheChamber: false,
                chamber: rand
            })
        }, 2000)
    }

    render() {
        let rouletteString = '';

        if(this.state.spinningTheChamber) {
            rouletteString =  'spinning the chamber and pulling the trigger! ...';

        }  else if(!this.state.spinningTheChamber && this.state.chamber !== null) {
            if(this.state.chamber === this.props.bulletInChamber) {
                rouletteString = 'BANG!!!'
            } else {
                rouletteString = `you're safe!`
            }
        }

        return (
        <div>
            <button onClick={() => this.handleButtonClick()}>
              Play Roulette
            </button>   
            <p>  
                {rouletteString}
            </p>
        </div>
        )
    }
}

export default RouletteGun;