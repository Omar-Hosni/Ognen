import React, {Component, useState} from 'react'
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddIntentModel } from './AddIntentModel';
import { UpdateIntentModel } from './UpdateIntentModel';
import {AiOutlineSearch} from 'react-icons/ai'
import {NavLink, useNavigate} from 'react-router-dom';

import Search from './Search';

export class Intents extends Component {

    constructor(){
        super();
        this.state = {
            intents: [], addModuleShow: false, updateModuleShow: false, editModalShow: false, currentIntent: []
        
        } 
           
    }

    fetchData = () => {
        fetch("http://127.0.0.1:8000/intents/")
        .then(response => response.json())
        .then((data)=>{
            this.setState({
                intents: data
            });
        })
    }

    componentDidMount = ()  => {
        this.fetchData();
    }

    componentDidUpdate(prevState) {
        this.fetchData();
    }

    deleteDep = (intentId) => {
        if (window.confirm('Are you sure ?')) {
            fetch('http://127.0.0.1:8000/intents/' + intentId, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {

        const { intents, id, tag, description } = this.state;
        let AddModelClose = () => this.setState({ addModalShow: false });
        let UpdateModelClose = () => this.setState({ updteModalShow: false });
        let Search = () => this.setState('');
        
        return (
            
            <div>
                <div className="flex flex-col  items-center justify-center ">
                <NavLink
                to="/search"
                >
                <input 
                placeholder='Search'
                className="flex flex-col items-center justify-center  mb-5 focus:outline-none focus:ring focus:border-blue-500 text-base sm:text-lg border-b-2 border-gray p-2"
                type="text"
                />
                </NavLink>
                </div>

                <p id="manage"></p>
                <Table className="table table-bordered hover" id="dataTable">
                    <thead>
                        <tr>
                            <th>tag</th>
                            <th>description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        intents.map((intents) =>
                            <tr key={intents.id}>
                                <td>{intents.tag}</td>
                                <td>{intents.description}</td>
                                <td>
                                    <ButtonToolbar className="flex w-fit">
                                    <Button className="mr-2" variant="primary"
                                            onClick={() => this.setState({ updteModalShow: true, currentIntent: intents })}>
                                            Edit
                                        </Button>
                                        <Button className="mr-2" variant="danger"
                                            onClick={() => this.deleteDep(intents.id)}>
                                            Delete
                                        </Button>
                                    </ButtonToolbar> 
                                </td>
                            </tr>)
                        }
                    </tbody>
                </Table>
                <ButtonToolbar class="bg-clue">
                    <Button variant="primary" onClick={() => this.setState({ addModalShow: true })}>
                        Add Intent
                    </Button>
                    <AddIntentModel show={this.state.addModalShow}
                        onHide={AddModelClose}></AddIntentModel>
                </ButtonToolbar>
                <UpdateIntentModel show={this.state.updteModalShow} onHide={UpdateModelClose} intentId={this.state.currentIntent.id}
                    tag={this.state.currentIntent.tag} description={this.state.currentIntent.description}/>
            </div>
        )
    }
}

