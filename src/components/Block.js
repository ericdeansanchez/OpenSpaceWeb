import React, { Component } from 'react';
import logo from '../logo.svg';
import './Block.css';
import './MapViewContainer.css';
import Button from '@material-ui/core/Button';
import MapViewContainer from './MapViewContainer';
import Navigation from './Navigation';

class Block extends Component {
    // Don't be fooled by the rocks that I got;
    // I'm still, I'm still Jenny from the <Block>
    render() {
        return (
            <div className='Block'>
                <div className='MapViewContainer'>
                    <MapViewContainer ></MapViewContainer>
                    <div className='CenterDiv'>
                        <Navigation></Navigation>
                    </div>
                </div>
            </div>
        );
    }
}

export default Block;