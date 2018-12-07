import React, { Component } from 'react';

class Landing extends Component {
    render() {
        return (
            <div className='Landing'>
                <header className='Landing-header'>
                    <h1> Welcome to OpenSpace Web </h1>
                    <p>
                        Check out our GitHub page to see our progress with
                        our mobile application.
                    </p>
                </header>
            </div>);
    }
}

export default Landing;