import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import { FILTER_NEW, FILTER_TOP, FILTER_HOT } from '../../../lib/filters';

const styles = {
    root: {
        display: 'flex',
        alignItems: 'center'
    },
    subnavItems: {
        padding: '0px 10px 0px 10px',
        margin: '0px 5px 0px 5px'
    },
    subNavTitle: {
        paddingRight: 20,
    }
}

class DisplayFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: {
                hot: true,
                new: false,
                top: false
            }
        };
    }

    changeFilter(filter) {

        switch(filter) {
            case 'hot':
                this.setState({filter: {
                    hot: true,
                    new: false,
                    top: false
                }})
                break;
            case 'new':
                this.setState({filter: {
                    hot: false,
                    new: true,
                    top: false
                }})
                break;
            case 'top':
                this.setState({filter: {
                    hot: false,
                    new: false,
                    top: true
                }})
                break;
            default:
                return;
        }
    }

    render() {

        const { classes } = this.props;

        return(
            <div className={classes.root}>
                    <Typography variant={"body2"} className={classes.subNavTitle}>TRIER PAR</Typography>
                    <Chip className={classes.subnavItems} clickable onClick={() => this.changeFilter(FILTER_HOT)} color={"primary"} label={"Tendance"} variant={this.state.filter.hot ? "default": "outlined"}></Chip>
                    <Chip className={classes.subnavItems} clickable onClick={() => this.changeFilter(FILTER_NEW)} color={"primary"} label={"Nouveautées"} variant={this.state.filter.new ? "default": "outlined"}></Chip>
                    <Chip className={classes.subnavItems} clickable onClick={() => this.changeFilter(FILTER_TOP)} color={"primary"} label={"Meilleur"} variant={this.state.filter.top ? "default": "outlined"}></Chip>
            </div>
        );
    }
}

DisplayFilter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DisplayFilter);
