import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, CardActions, Button, Link, Collapse } from '@material-ui/core';
import { TYPE_TEXT, TYPE_IMAGE, TYPE_LINK, TYPE_VIDEO } from '../../../../lib/post';
import Image from './SinglePostComponents/Image';

const styles = {
    headerTitle: {
        'margin-bottom': '16px'
    },
}

class SinglePost extends React.Component {

    static async defaultProps() {
        return {
            post: {},
            className: ""
        }
    }

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { classes } = this.props;

        return(
            <Card key={this.props.post.id+"-"+this.props.post.title} className={this.props.className}>
                <CardContent>
                    <Link href={this.props.post.getLink()}>
                        <Typography variant="h5" component="h2" className={classes.headerTitle}>
                            { this.props.post.title }
                        </Typography>
                    </Link>
                    {(() => {
                        switch(this.props.post.type) {
                            case TYPE_TEXT:
                                return  <Typography variant="body2">{this.props.post.content}</Typography>
                            case TYPE_IMAGE:
                                return <Image post={this.props.post}/>
                            case TYPE_LINK:
                                return  <a target="_blank" href={this.props.post.content}>{this.props.post.content}</a>
                            case TYPE_VIDEO:
                                return  <p>WIP</p>
                            
                        }
                    })()}
                </CardContent>
                <CardActions>
                <Link href={this.props.post.getLink()}>
                    <Button size="small">Comments</Button>
                </Link>
                    <Button size="small">Upvote</Button>
                    <Button size="small">Downvote</Button>
                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles)(SinglePost);