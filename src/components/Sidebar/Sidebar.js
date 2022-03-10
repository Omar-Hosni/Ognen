import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div className="sidebar sidebar-style-2">
                    <div className="sidebar-wrapper scrollbar scrollbar-inner">
                        <div className="sidebar-content">
                            <div className="user">
                                <div className="avatar-sm float-left mr-2">
                                    <img src="./assets/img/Arthur.png" alt="..." className="avatar-img rounded-circle" />
                                </div>
                                <div className="info text-left ">
                                    <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                                        <span>
                                            Artive
                                            <span className="user-level ">chatbot</span>
                                            <span className="caret" />
                                        </span>
                                    </a>
                                    <div className="clearfix" />
                                    <div className="collapse in" id="collapseExample">
                                        <ul className="nav">
                                            <li>
                                                <a href="#settings">
                                                    <span className="link-collapse">Settings</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-primary" >
                                <li className="nav-item active" >
                                    <a data-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                                        <i className="fas fa-list" />
                                        <p>Use cases</p>
                                        <span className="caret" />
                                    </a>
                                    <div className="collapse" id="dashboard">
                                        <ul className="nav nav-collapse">
                                            <li>
                                                <Link to="/intents">
                                                    <span className="sub-item">New intent</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item " >
                                    <a data-toggle="collapse" href="#dashboard2" className="collapsed" aria-expanded="false">
                                        <i className="fas fa-robot" />
                                        <p>Chats</p>
                                        <span className="caret" />
                                    </a>
                                    <div className="collapse" id="dashboard2">
                                        <ul className="nav nav-collapse">
                                            <li>
                                                <Link  to="/history">
                                                    <span className="sub-item">History Chat</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/manage">
                                                    <span className="sub-item">Build Dialogues</span>
                                                </Link>
                                            </li>
                                              <li>
                                                <Link to="/chatbot">
                                                    <span className="sub-item">Chatbot</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/stats">
                                                    <span className="sub-item">Stats</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-section">
                                    <span className="sidebar-mini-icon">
                                        <i className="fa fa-ellipsis-h" />
                                    </span>
                                    <h4 className="text-section">Components</h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
