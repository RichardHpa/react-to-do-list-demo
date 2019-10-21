import React, { Component } from 'react';
import './button.css';

class Button extends Component {
    constructor(props){
        super(props)

        this.clickButton = this.clickButton.bind(this);
    }

    clickButton(){
        if(this.props.buttonClicked){
            this.props.buttonClicked()
        }
    }

    render(){
        return(
            <button onClick={this.clickButton} className={this.props.btnType}>
                {this.props.btnText}
            </button>
        )
    }
}

export default Button;
