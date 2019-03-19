import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import { Grid, Paper, Icon, Button, Link } from '@material-ui/core';
import CommentComponent from './CommentComponent';
import VoteComponent from './VoteComponent';

const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: 'grey'
	},
	paper: {
  	padding: theme.spacing.unit * 2,
    // margin: 'auto',
    // maxWidth: 500,
	},
	cardContent: {
		paddingBottom: '0px !important',
	},
	cardContent2: {
		padding: '0px',
	},
	cardsContainer: {
		marginTop: 20
	},
	button: {
		margin: theme.spacing.unit,
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	},
	
	control: {
		padding: theme.spacing.unit * 2,
	},
	card: {
		margin: theme.spacing.unit * 2,
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
	},
	media: {
		marginTop: 0,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: 500,
		height: 700,
	},
});

function DisplayMedia(props){
	const media = props.media;
	const content = props.content;
	const classes = props.className;

	switch(media){
		case 'img': return (
			<CardMedia
				className={classes.media}
				image={content}
				title="contenu publication"
			/>
		);
		case 'link': return (
			<CardContent className={classes.cardContent2}>
				<Typography variant="subtitle1">
					<Link href={content}>{content}</Link>
				</Typography>
			</CardContent>
		);
		default : return (
			<CardContent className={classes.cardContent2}>
				<Typography variant="subtitle1">
					{content}
				</Typography>
			</CardContent>
		);
	}
}

class SubComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			posts : [
				{title : 'Titre', author: 'John Doe', media: 'img', content : '/static/img/landscape-img-test.jpg', date: '??/??/????'},
				{title : 'Lorem Ipsum Dolor Sit Amet', author: 'Jules César', media: 'txt', content : 'Lorem Ipsum Dolor Sit Amet', date: '??/??/????'},
				{title : 'Wiki mythologie grecque', author: 'Zeus', media: 'link', content : 'https://fr.wikipedia.org/wiki/Mythologie_grecque', date: '??/??/????'},
				{title : 'Un petit gif sympathique !', author: 'Giffy', media: 'img', content : '/static/img/gif-test.gif', date: '??/??/????'},
			 ], /* '/static/img/landscape-img-test.jpg' */
		};
	}

	render() {
		const {classes} = this.props;

		return(
			<div className={classes.root}>
					<Grid container justify="center">
						<Grid item xs={12} sm={12} md={6} >
							{this.state.posts.map((post, index) => (
								<Card className={classes.card} key={index}>
									<CardHeader
										avatar={
											<VoteComponent/>
										}
										title={
											<div>
												<Typography variant="subtitle2" color="textSecondary">
													{'Posté par '+post.author+' le '+post.date}
												</Typography>
												<Typography variant="h5" gutterBottom>
													{post.title}
												</Typography>
											</div>
										}
										subheader={
											<DisplayMedia className={classes} media={post.media} content={post.content}/>
										}
									/>
									<CardContent className={classes.cardContent}>
										<Button color="default" className={classes.button}>
											<CommentIcon className={classes.leftIcon}/> ??? Comments
										</Button>
										<Button className={classes.button}>
											<ShareIcon className={classes.leftIcon}/>Share
										</Button>
									</CardContent>
								</Card>
							))}
							
						</Grid>
					</Grid>
			</div>
		)
	}
}

export default withStyles(styles)(SubComponent);