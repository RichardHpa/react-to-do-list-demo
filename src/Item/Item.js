import React, { Component } from 'react';
import './item.css';

import Button from '../Button/Button';

class Item extends Component {

    handleEdit(id){
        this.props.editItem(id);
    }

    handleDelete(id){
        this.props.deleteItem(id);
    }

    render(){
        return(
            <div className="listItem">
                <div className="listText">
                    {this.props.info.text}
                </div>
                <div className="listButtons">
                    <Button btnText="Edit" btnType="blueBtn" buttonClicked={this.handleEdit.bind(this, this.props.info.id)}/>
                    <Button btnText="Delete" btnType="redBtn" buttonClicked={this.handleDelete.bind(this, this.props.info.id)}/>
                </div>
            </div>
        )
    }
}

export default Item;
