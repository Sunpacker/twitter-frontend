import React from 'react'
import { Avatar, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core'
import {
	ChatBubbleOutlineOutlined as CommentIcon,
	RepeatOutlined as RepostIcon,
	FavoriteBorderOutlined as LikeIcon,
	ReplyOutlined as ShareIcon
} from '@material-ui/icons'
import { grey } from '@material-ui/core/colors'

const useHomeStyles = makeStyles( theme => ({
	block: {
		padding: '1rem 1.25rem',
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
	},
	tweet: {
		'&:hover': {
			backgroundColor: grey[50],
			cursor: 'pointer'
		}
	},
	tweetAuthor: {
		marginLeft: theme.spacing(1),
		color: grey[500]
	},
	tweetActions: {
		display: 'flex',
		justifyContent: 'space-around',
		padding: '0!important'
	},
	tweetActionIcon: {
		fontSize: 16
	}
}))

interface Tweet {
	user: {
		name: string;
		login: string;
		avatar: string;
	};
	text: string;
}

export const Tweet: React.FC<Tweet> = ({ user, text }: Tweet): React.ReactElement => {
	const classes = useHomeStyles()

	return (
		<Paper className={`${classes.block} ${classes.tweet}`} square>
			<Grid container spacing={3}>
				<Grid item xs={1}>
					<Avatar src={user.avatar} />
				</Grid>
				<Grid item xs={11}>
					<Typography>
						<b>{user.name}</b>
						<span className={classes.tweetAuthor}>@{user.login} - 1ч.</span>
					</Typography>
					<Typography variant="body1">{text}</Typography>
				</Grid>
				<Grid className={classes.tweetActions} item xs={12}>
					<div>
						<IconButton color="primary">
							<CommentIcon className={classes.tweetActionIcon} />
						</IconButton>
						<span>1</span>
					</div>
					<div>
						<IconButton color="primary">
							<RepostIcon className={classes.tweetActionIcon} />
						</IconButton>
					</div>
					<div>
						<IconButton color="primary">
							<LikeIcon className={classes.tweetActionIcon} />
						</IconButton>
						<span>1</span>
					</div>
					<div>
						<IconButton color="primary">
							<ShareIcon className={classes.tweetActionIcon} />
						</IconButton>
					</div>
				</Grid>
			</Grid>
		</Paper>
	)
}
