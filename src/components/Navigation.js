import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ListIcon from '@material-ui/icons/List';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from '../App';
import SpaceView from './SpaceView';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

function IconButtons(props) {
    const { classes } = props;
    return (
        <div>
            <IconButton className={classes.button} aria-label="Home">
                <HomeIcon />
            </IconButton>
            <IconButton className={classes.button} aria-label="Spaces">
                <ListIcon>alarm</ListIcon>
            </IconButton>
        </div>
    );
}

IconButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconButtons);