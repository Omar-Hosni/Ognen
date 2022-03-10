import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                    <div className="main-header">
      {/* Logo Header */}
      <div className="logo-header"  >
        <a href="/" className="logo">
        <img src="./assets/img/logo.png" alt="navbar brand" className="navbar-brand"/>
        </a>
        <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="icon-menu" />
          </span>
        </button>
        <button className="topbar-toggler more"><i className="icon-options-vertical" /></button>
        <div className="nav-toggle">
          <button className="btn btn-toggle toggle-sidebar">
            <i className="icon-menu" />
          </button>
        </div>
      </div>
      {/* End Logo Header */}
      {/* Navbar Header */}
      <nav className="navbar navbar-header navbar-expand-lg " >
      
      </nav>
      {/* End Navbar */}
    </div>
            </div>
        )
    }
}
