import React, { Component } from 'react';

class Contact extends Component {

    TextStyle={
        color: 'white', 
        backgroundColor:'green', 
        margin:'40px',
        padding: '20px'
    }
    render() {
        return (
            <div>
                <h1 style={this.TextStyle}>Contact</h1>
            </div>
        );
    }
}

export default Contact;