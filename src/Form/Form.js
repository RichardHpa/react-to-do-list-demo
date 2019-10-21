import React, { Component } from 'react';
import './form.css';

import Button from '../Button/Button';

class Form extends Component {

    onChange = e => {
        this.props.changeInput(e.target.value);
    }

    submitForm = e => {
        e.preventDefault();
        this.props.submit();
    }

    render(){
        let button;
        if(this.props.value.id === null){
            button = 'Add Item';
        } else {
            button = 'Edit Item';
        }

        return(
            <form className="SearchForm" onSubmit={this.submitForm}>
                <input className="searchBar" onChange={this.onChange} value={this.props.value.value}/>
                <Button btnText={button}/>
            </form>
        )
    }
}

export default Form;
