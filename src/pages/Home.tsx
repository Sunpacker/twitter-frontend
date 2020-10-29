import React from 'react'
import { Button, Container, createStyles, Grid, IconButton, makeStyles, Paper, Typography, withStyles, Hidden, TextareaAutosize, CircularProgress, Avatar, List, ListItemAvatar, ListItem, ListItemText, TextField, ListSubheader } from '@material-ui/core'
import { Theme } from '@material-ui/core/styles'
import { 
	Twitter as TwitterIcon, 
	Search as SearchIcon, 
	NotificationsNoneOutlined as NotificationIcon, 
	EmailOutlined as EmailIcon,
	BookmarkBorderOutlined as BookmarkIcon,
	ListAltOutlined as ListIcon,
	PermIdentityOutlined as UserIcon,
	ImageOutlined as ImageOutlinedIcon,
	EmojiEmotionsOutlined as EmojiIcon
} from '@material-ui/icons'
import { Tweet } from '../components/Tweet'

const useHomeStyles = makeStyles((theme: Theme) => ({
	container: {
		minHeight: '101.25vh'
	},
	sticky: {
		position: 'sticky',
		top: 0,
	},
	sideMenuList: {
		padding: 0,
		listStyleType: 'none',
		'& li': {
			display: 'flex',
			alignItems: 'center',
			padding: '.5rem',
			marginBottom: theme.spacing(1.5),
			borderRadius: 1000,
			'& svg': {
				fontSize: theme.spacing(4),
			},
			'& h6': {
				marginLeft: theme.spacing(1.5),
				fontSize: theme.spacing(2.75),
				fontWeight: 600,
			},
			'&:hover': {
				backgroundColor: 'rgba(29,161,242,.1)',
				cursor: 'pointer',
				'& svg path': {
					fill: theme.palette.primary.main
				},
				'& h6': {
					color: theme.palette.primary.main
				}
			},
		},
	},
	feed: {
		paddingBottom: '0!important'
	},
	block: {
		padding: '1rem 1.25rem',
		borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
	},
	pageTitle: {
		zIndex: 1
	},
	tweetForm: {
		display: 'flex',
		flexDirection: 'column',
		'& textarea': {
			marginLeft: theme.spacing(1.5),
			width: '100%',
			height: '100%',
			fontSize: 24,
			fontFamily: 'Segoe UI',
			border: 'none',
			resize: 'none',
			'&:focus': {
				outline: 'none'
			}
		}
	},
	tweetFormText: {
		display: 'flex',
		marginBottom: theme.spacing(1.5)
	},
	tweetFormActions: {
		display: 'flex',
		alignItems: 'center'
	},
	tweetFormTextProgressBar: {
		marginLeft: theme.spacing(.5),
		marginRight: theme.spacing(2)
	},
	rightSide: {
		paddingTop: 20,
	}
}))

const SearchTextField = withStyles((theme: Theme) => createStyles({
	root: {
		'& .MuiOutlinedInput-root': {
			borderRadius: 30,
			backgroundColor: '#E6ECF0',
			padding: 0,
			paddingLeft: 15,
			'&.Mui-focused': {
				backgroundColor: '#fff',
				'& fieldset': { borderWidth: 1, borderColor: theme.palette.primary.main },
				'& svg path': { fill: theme.palette.primary.main }
			}
		}
	}
}))(TextField)


export const Home: React.FC = (): React.ReactElement => {
	const classes: any = useHomeStyles()
	const [text, setText] = React.useState<string>('')
	const textLength: number = text.length
	const textLimit: number = 280
	const textLimitPercentage: number = Math.round((text.length / textLimit) * 100)

	const handleChangeText = (e: React.FormEvent<HTMLTextAreaElement>): void => {
		if (e.currentTarget) setText(e.currentTarget.value)
	}
	const handleAddTweet = (): void => {
		setText('')
	}

	return (
		<Container maxWidth="lg">
			<Grid className={classes.container} container spacing={4}>
				<Grid item xs={1} lg={3}>
					<ul className={`${classes.sticky} ${classes.sideMenuList}`}>
						<IconButton color="primary">
							<TwitterIcon style={{ fontSize: 36 }} />
						</IconButton>
						<li>
							<SearchIcon />
							<Hidden smDown>
								<Typography variant="h6">Поиск</Typography>
							</Hidden>
						</li>
						<li>
							<NotificationIcon />
							<Hidden smDown>
								<Typography variant="h6">Уведомления</Typography>
							</Hidden>
						</li>
						<li>
							<EmailIcon />
							<Hidden smDown>
								<Typography variant="h6">Сообщения</Typography>
							</Hidden>
						</li>
						<li>
							<BookmarkIcon />
							<Hidden smDown>
								<Typography variant="h6">Закладки</Typography>
							</Hidden>
						</li>
						<li>
							<ListIcon />
							<Hidden smDown>
								<Typography variant="h6">Список</Typography>
							</Hidden>
						</li>
						<li>
							<UserIcon />
							<Hidden smDown>
								<Typography variant="h6">Профиль</Typography>
							</Hidden>
						</li>
					</ul>
				</Grid>
				<Grid className={classes.feed} item xs={7} lg={6}>
					<Paper variant="outlined" style={{ height: '100%' }} square>
						<Paper className={`${classes.sticky} ${classes.block} ${classes.pageTitle}`} square>
							<Typography variant="h6">Главная</Typography>
						</Paper>

						<Paper className={`${classes.block} ${classes.tweetForm}`}>
							<div className={classes.tweetFormText}>
								<Avatar src="https://i.playground.ru/p/lzF9n_oH7zjMPi6YYanG_A.jpeg" />
								<TextareaAutosize placeholder="Что происходит?" value={text} onChange={handleChangeText} />
							</div>
							<div className={classes.tweetFormActions}>
								<IconButton color="primary">
									<ImageOutlinedIcon />
								</IconButton>
								<IconButton color="primary" style={{ marginRight: 'auto' }}>
									<EmojiIcon />
								</IconButton>

								{text && (
									<>
										<span>{`${textLength} / ${textLimit}`}</span>
										<CircularProgress 
											className={classes.tweetFormTextProgressBar} 
											variant="static" 
											size={20} thickness={5} 
											value={textLength >= textLimit ? 100 : textLimitPercentage}
											style={ textLength >= textLimit ? { color: 'red' } : undefined }
										/>
									</>
								)}
								<Button onClick={handleAddTweet} disabled={textLength >= textLimit} color="primary" variant="contained">Твитнуть</Button>
							</div>
						</Paper>
						
						{[
							...new Array(15).fill(
								<Tweet 
									user={{ 
										name: 'Glafira Zhur', 
										login: 'glafirazhur', 
										avatar: 'https://i.playground.ru/p/lzF9n_oH7zjMPi6YYanG_A.jpeg'
									}} 
									text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit odit labore officiis ut, deleniti doloribus explicabo aut cum nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo velit odit labore officiis ut."
								/>
							)
						]}
					</Paper>
				</Grid>
				<Grid item xs={4} lg={3}>
					<div className={`${classes.sticky} ${classes.rightSide}`}>
						<SearchTextField 
							variant="outlined" 
							placeholder="Поиск в Твиттер"
							fullWidth
						/>
						<List
							subheader={
								<ListSubheader component="div">
									Кого читать
								</ListSubheader>
							}
						>
							{[...new Array(5).fill(
								<ListItem button divider>
									<ListItemAvatar>
										<Avatar src="https://i.playground.ru/p/lzF9n_oH7zjMPi6YYanG_A.jpeg" />
									</ListItemAvatar>
									<ListItemText 
										primary="Dock of Shame"
										secondary={
											<Typography component="span" variant="body2">@FavDockOfShame</Typography>
										}
									/>
								</ListItem>
							)]}
							<Typography>Показать еще</Typography>
						</List>
					</div>
				</Grid>
			</Grid>
		</Container>
	)
}
