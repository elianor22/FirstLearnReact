import React, { Component } from 'react'

export default class header extends Component {
    render() {
        return (
            <div>
                    <nav className="navbar navbar-expand-lg bg-white navbar-light">
                        <button href="#" className="navbar-brand btn">Logo
                        
                        </button>
                        
                        <div className="collapse navbar-collapse" >
                        <ul className="navbar-nav items-nav ml-auto">
                            <li className="nav-item mr-3">
                            <button href="#" className="nav-link btn">
                                Home
                            </button>
                            </li>
                            <li className="nav-item mr-3">
                            <button href="#" className="nav-link btn">
                                Product
                            </button>
                            </li>
                            <li className="nav-item mr-3">
                            <button href="#" className="nav-link btn">
                                Chart
                            </button>
                            </li>
                            <li className="nav-item mr-3">
                            <button href="#" className="nav-link btn">
                                Profile
                            </button>
                            </li>
                        </ul>
                        </div>
                    </nav>
            </div>
        )
    }
}
