
import React from "react";
import MapView from './MapView';

export default class MapViewContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'default_width': 600, 'view_width': 600, 'view_height': 600 };
    }

    updateDimension() {
        if (window.outerWidth < this.state.default_width) {
            this.setState({
                'default_width': 600,
                'view_width': 300,
                'view_height': 520
            });
        } else {
            this.setState(
                { 'default_width': 600, 'view_width': 600, 'view_height': 600 }
            );
        }
    }

    componentDidMount() {
        this.updateDimension();
        window.addEventListener('resize', this.updateDimension.bind(this));
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimension.bind(this));
    }


    render() {

        return (
            <MapView
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCb_3eKXiVgg-ld4Dsy84qZ6pSZqugDACo&callback=initMaps`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: this.state.view_height, width: this.state.view_width }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        );
    }
}
