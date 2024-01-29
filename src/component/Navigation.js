import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                    <li><Link to="/" className="active">Home</Link></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#about">About</a></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}