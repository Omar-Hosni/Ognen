import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';



export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="white" expand="lg" id="my-nav">
                <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                        Home
                    </NavLink>

                    <NavLink className="d-inline p-2 bg-dark text-white" to="/history">
                        Chat
                    </NavLink>

                    <NavLink className="d-inline p-2 bg-dark text-white" to="/manage">
                        Manage Chat
                    </NavLink>

                    <NavLink className="d-inline p-2 bg-dark text-white" to="/chatbot">
                        Chatbot
                    </NavLink>

                    <NavLink className="d-inline p-2 bg-dark text-white" to="/intents">
                        Intents
                    </NavLink>
                   
               </Nav>
                </Navbar.Collapse>

            </Navbar>
        )
    }
}