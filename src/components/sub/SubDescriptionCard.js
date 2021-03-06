import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import InfoCard from '../common/InfoCard';
import SubRow from '../common/SubRow';
import CreatePostButton from './CreatePostButton';
import firebase from "../../../lib/firebase";

const styles = {
    card: {
        marginBottom: 24
      },
}

class SubDescriptionCard extends React.Component {

    static async defaultProps() {
        return {
            sub: {}
        }
    }

    componentDidMount = async () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user)
                this.setState({uid: user.uid})
            else
                this.setState({uid: null})
        })
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { classes } = this.props;

        return(
            <InfoCard title={this.props.sub.getDisplayName()}>
                <SubRow community={this.props.sub}/>
                <p>Lorem ipsum dolor sit amet</p>
                {
                    this.state.uid ? (
                        <CreatePostButton sub={this.props.sub}/>

                    ) : (
                        ""
                    )
                }
            </InfoCard>
        );
    }
}

export default withStyles(styles)(SubDescriptionCard);