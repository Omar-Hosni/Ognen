import React,{Component, useEffect} from 'react';
import {Table} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//import 'bootstrap/dist/css/bootstrap.min.css';


export class Chat extends Component{

    constructor(){
        super();
        this.state={
            deps:[]
        }
    }

    refreshList()
    {
        fetch('http://127.0.0.1:8000/history/')
        .then(response=>response.json())
        .then(deps=>{
            this.setState({
                deps:deps
            });
            console.log(deps);

        })
    };


    componentDidMount(){
        this.refreshList();
        }

    componentDidUpadte(){
        this.refreshList();
            }
            

    render(){
        const chatData = this.state.deps;
        const rows = chatData.map((chat) =>
        <tr key={chat.id}>
            <td>{chat.id}</td>
            <td>{chat.tag}</td>
            <td>{chat.patterns}</td>
            <td>{chat.responses}</td>
      </tr>
        );

        return(
         
            <div>
                <p id="before-table"></p>
               <Table className="table table-bordered" id="dataTable">
                <thead>
                    <tr>
                <th>id</th>
                <th>Name of Intents</th>
                <th>Training Phrases</th>
                <th>Responses</th>
                </tr>
                </thead>
                <tbody>
                    {rows} 
                </tbody>
                </Table>
            </div>

        )
    }
}