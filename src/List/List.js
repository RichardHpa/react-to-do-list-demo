// When you use arrow functions, you don't need to bind the function to the component.

import React, { Component } from 'react';
import './list.css';

import Form from '../Form/Form';
import Item from '../Item/Item';


class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            listItems: [
                {
                    id: 1,
                    text: 'Item 1'
                }
            ],
            item: {
                id: null,
                value: ''
            }
        }
    }

    handleChangeInput = (text) => {
        const { item } = this.state;
        item.value = text;
        this.setState({
            item: item
        })
    }

    handleSubmit = () => {
        const { item, listItems} = this.state;
        if(item.id === null){
            const newItem = {
                id: this.state.listItems.length + 1,
                text: item.value
            }
            listItems.push(newItem);
        } else {
            for (var i = 0; i < listItems.length; i++) {
                if(listItems[i].id === item.id){
                    listItems[i].text = item.value
                }
            }
        }

        this.setState({
            listItems: listItems,
            item: {
                id: null,
                value: ''
            }
        })
    }

    handleDelete = (id) => {
        const { listItems } = this.state;
        for (var i = 0; i < listItems.length; i++) {
            if(listItems[i].id === id){
                listItems.splice(i, 1);
            }
        }
        this.setState({
            listItems: listItems
        })
    }

    handleEdit = (id) => {
        const { listItems } = this.state;
        for (var i = 0; i < listItems.length; i++) {
            if(listItems[i].id === id){
                this.setState({
                    item: {
                        id: id,
                        value: listItems[i].text
                    }
                })
                break;
            }
        }
    }


    render(){
        const { listItems } = this.state;
        return(
            <div className="listContainer">
                <h1>Shopping List</h1>
                <Form
                    value={this.state.item}
                    changeInput={this.handleChangeInput}
                    submit={this.handleSubmit}
                />
                <div className="list">
                    {
                        listItems.map(item => {
                            return <Item
                                info={item}
                                key={item.id}
                                deleteItem={this.handleDelete}
                                editItem={this.handleEdit}
                            />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default List;
